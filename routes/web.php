<?php

use App\Models\Loan;
use Inertia\Inertia;
use App\Models\Lendee;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\LendeeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);

    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'lendees' => Lendee::all()->count(),
        'active_loans' => Loan::all()->count()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('lendees', [LendeeController::class, 'index'])->name('lendees.index');
// Route::get('lendee/create', [LendeeController::class, 'create'])->name('lendee.create');

Route::resource('lendees', LendeeController::class);

Route::resource('loans', LoanController::class);

Route::get('/loans/create/{id}', [LoanController::class, 'create'])->name('loans.create');

require __DIR__.'/auth.php';

