<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Loan;
use App\Models\Lendee;
use App\Models\Payment;
use Illuminate\Http\Request;
use App\Http\Requests\StoreLoanRequest;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id = null)
    {
        $lendee = Lendee::find($id);

        return inertia('Loan/Create', [
            'lendee' => $lendee
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLoanRequest $request)
    {
        $lendee = Lendee::find($request->lendee_id);

        $loan = Loan::create($request->validated());
        $pays = $loan->amortization / $loan->term;

        for ($x = 0; $x < $loan->amortization; $x++) {
            $month = $pays == 1 ? Carbon::parse($loan->maturity) : Carbon::parse($loan->maturity);
            $payment = new Payment;

            $payment->loan_id = $loan->id;
            if($pays == 1){
                $payment->month = $month->addMonths($x);
            } else {
                $payment->month = 0;
            }

            $payment->save();
        }

        return redirect()->route('lendees.show', $lendee->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function show(Loan $loan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function edit(Loan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Loan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Loan $loan)
    {
        //
    }
}
