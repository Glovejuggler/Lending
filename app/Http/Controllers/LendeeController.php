<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\File;
use App\Models\Loan;
use App\Models\Lendee;
use App\Models\Payment;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
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
        // dd(Lendee::with(['loan' => function ($query) {
        //     $query->orderBy('id', 'asc');
        // }])->get());

        return inertia('Lendees/Index', [
            'lendees' => Lendee::query()
                            ->filter(Request::only('search', 'status'))
                            ->with('loan')
                            ->paginate(10)
                            ->withQueryString(),
            'filters' => Request::only(['search', 'status']),
            'today' => now(),
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
        // dd(Storage::url('4/iroha cutout copy.png'));

        return inertia('Lendees/Show', [
            'lendee' => $lendee,
            'loan' => $loan,
            'bal' => $loan?->receivable - $loan?->total_payments(),
            'pics' => File::where('loan_id', $loan?->id)->get(),
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
    public function update(StoreLendeeRequest $request, Lendee $lendee)
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
