<?php

use App\Models\Loan;
use Inertia\Inertia;
use App\Models\Lendee;
use App\Models\Payment;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\LendeeController;
use App\Http\Controllers\PaymentController;

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
        return Inertia::render('Home');

    // return redirect()->route('login');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'lendees' => Lendee::all()->count(),
        'active_loans' => Loan::all()->count(),
        'overdue_payments' => Payment::whereDate('month','<',now())
                                        ->where('payment','=',null)
                                        ->count(),
        'due_payments' => Payment::whereDate('month','=',now())->count()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('lendees', [LendeeController::class, 'index'])->name('lendees.index');
// Route::get('lendee/create', [LendeeController::class, 'create'])->name('lendee.create');

Route::resource('lendees', LendeeController::class);

Route::resource('loans', LoanController::class);
// Route::get('loan/payment/{payment}', [PaymentController::class, 'edit'])->name('payment.edit');
Route::resource('payment', PaymentController::class);

Route::get('/loans/create/{id}', [LoanController::class, 'create'])->name('loans.create');

require __DIR__.'/auth.php';

