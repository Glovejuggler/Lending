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
}
