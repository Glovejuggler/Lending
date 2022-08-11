<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Models\Lendee;
use App\Models\Payment;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StoreLendeeRequest;

class LendeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Lendees/Index', [
            'lendees' => Lendee::query()
                            ->when(Request::input('search'), function ($query, $search) {
                                $query->where('name','like',"%{$search}%");
                            })
                            ->with('loan')
                            ->orderBy('created_at','desc')
                            ->paginate(10)
                            ->withQueryString(),
            'filters' => Request::only(['search']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Lendees/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLendeeRequest $request)
    {
        $lendee = Lendee::create([
            'name' => $request->name,
            'address' => $request->address
        ]);

        return redirect()->route('lendees.show', $lendee->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lendee  $lendee
     * @return \Illuminate\Http\Response
     * 
     * format('F j, Y')
     */
    public function show(Lendee $lendee)
    {
        $loan = Loan::where('lendee_id','=',$lendee->id)->latest()->first();

        $payments = Payment::where('loan_id', $loan?->id)->get();

        return inertia('Lendees/Show', [
            'lendee' => $lendee,
            'loan' => $loan,
            'payments' => $payments
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lendee  $lendee
     * @return \Illuminate\Http\Response
     */
    public function edit(Lendee $lendee)
    {
        return inertia('Lendees/Edit', [
            'lendee' => $lendee
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lendee  $lendee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lendee $lendee)
    {
        $lendee->name = $request->name;
        $lendee->address = $request->address;

        $lendee->update();

        return redirect()->route('lendees.show', $lendee->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lendee  $lendee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lendee $lendee)
    {
        $lendee->delete();

        return redirect()->route('lendees.index');
    }
}
