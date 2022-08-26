<?php

namespace App\Models;

use App\Models\Loan;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lendee extends Model
{
    protected $fillable = [
        'name',
        'address'
    ];

    use HasFactory;

    public function loan()
    {
        return $this->hasOne(Loan::class)->latestOfMany();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%');
            });
        })->when($filters['status'] ?? null, function ($query, $status) {
            if ($status === 'active') {
                $query->whereHas('loan');
            } elseif ($status === 'inactive') {
                $query->whereDoesntHave('loan');
            } elseif ($status === 'overdue') {
                $query->whereHas('loan', function ($q) {
                    $q->whereHas('payments', function ($q) {
                        $q->whereDate('month','<',now())
                            ->where('payment',null);
                    });
                });
            } elseif ($status === 'dueToday') {
                $query->whereHas('loan', function ($q) {
                    $q->whereHas('payments', function ($q) {
                        $q->whereDate('month','=',now());
                    });
                });
            }
        });
    }
}
