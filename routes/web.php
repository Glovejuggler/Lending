<?php

use App\Models\Loan;
use Inertia\Inertia;
use App\Models\Lendee;
use App\Models\Payment;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FileController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LendeeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SubsidiaryController;

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
        // return Inertia::render('Home');

    return view('pages.home');
})->name('home');

Route::get('/dashboard', function () {
    if (Gate::allows('isAdmin')) {
        return Inertia::render('Dashboard', [
            'lendees' => Lendee::all()->count(),
            'active_loans' => Loan::all()->count(),
            'overdue_payments' => Payment::whereDate('month','<',now())
                                            ->where('payment','=',null)
                                            ->count(),
            'due_payments' => Payment::whereDate('month','=',now())
                                        ->where('payment','=', null)
                                        ->count()
        ]);
    } else {
        dd('pepega lmao');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('lendees', LendeeController::class);
Route::get('lendee/view/{lendee}', [LendeeController::class, 'view'])->name('lendee.view');

Route::resource('loans', LoanController::class);
Route::get('/loans/create/{id}', [LoanController::class, 'create'])->name('loans.create');

Route::resource('payment', PaymentController::class);
Route::resource('files', FileController::class);
Route::resource('subsidiaries', SubsidiaryController::class);

Route::get('/download/{id}', [FileController::class, 'download'])->name('file.download');

Route::post('/user/store/{lendee}', [UserController::class, 'store'])->name('user.store');

require __DIR__.'/auth.php';

