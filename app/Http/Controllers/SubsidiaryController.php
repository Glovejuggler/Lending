<?php

namespace App\Http\Controllers;

use App\Models\Lendee;
use App\Models\Subsidiary;
use Illuminate\Support\Facades\Request;

class SubsidiaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Subsidiaries/Index', [
            'subsidiaries' => Lendee::groupBy('address')
                                    ->selectRaw('count(*) as total, address')
                                    ->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subsidiary  $subsidiary
     * @return \Illuminate\Http\Response
     */
    public function show($subsidiary)
    {
        // dd(Lendee::where('address', $subsidiary)->with('loan')->get());
    
        return inertia('Subsidiaries/Show', [
            'lendees' => Lendee::query()
                                ->where('address', $subsidiary)
                                ->filter(Request::only('search', 'status'))
                                ->with('loan')
                                ->paginate(10)
                                ->withQueryString(),
            'filters' => Request::only(['search', 'status']),
            'subsidiary' => $subsidiary,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subsidiary  $subsidiary
     * @return \Illuminate\Http\Response
     */
    public function edit(Subsidiary $subsidiary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subsidiary  $subsidiary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subsidiary $subsidiary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subsidiary  $subsidiary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subsidiary $subsidiary)
    {
        //
    }
}
