<?php

namespace App\Models;

use App\Models\Payment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Loan extends Model
{
    protected $fillable = [
        'lendee_id',
        'principal',
        'rate',
        'term',
        'amortization',
        'maturity'
    ];

    protected $attributes = [
        'principal' => 0,
        'rate' => 0,
        'term' => 0,
        'amortization' => 0,
    ];

    use HasFactory;

    /**
     * Relations
     */
    public function lendee()
    {
        return $this->belongsTo(Lendee::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function total_payments()
    {
        $total = 0;
        foreach ($this->payments as $payment) {
            $total += $payment->payment;
        }

        return $total;
    }

    /**
     * Appended attributes
     */
    protected $appends = [
        'receivable',
        'interest',
        'interestm',
        'principalm',
        'paymentm',
        'is_fully_paid'
    ];

    public function getReceivableAttribute()
    {
        return $this->principal * (1 + ($this->rate/100));
    }

    public function getInterestAttribute()
    {
        return $this->principal * ($this->rate/100);
    }

    public function getInterestMAttribute()
    {
        return $this->interest / $this->amortization;
    }

    public function getPaymentMAttribute()
    {
        return $this->receivable / $this->amortization;
    }

    public function getPrincipalMAttribute()
    {
        return $this->principal / $this->amortization;
    }

    public function getIsFullyPaidAttribute()
    {
        $total = 0;
        $payments = Payment::where('loan_id','=',$this->id)->get();
        foreach ($payments as $payment) {
            $total += $payment->payment;
        }

        if ($total >= $this->receivable) {
            return true;
        } else {
            return false;
        }
    }
}
