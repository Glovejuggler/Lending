<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $fillable = [
        'lendee_id',
        'principal',
        'rate',
        'term',
        'amortization'
    ];

    protected $attributes = [
        'principal' => 0,
        'rate' => 0,
        'term' => 0,
        'amortization' => 0,
    ];

    use HasFactory;

    public function lendee()
    {
        return $this->belongsTo(Lendee::class);
    }
}
