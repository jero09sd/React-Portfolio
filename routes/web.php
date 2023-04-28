<?php

use App\Http\Controllers\ProfileController;
use App\Models\User;
use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $users = User::all();
    return Inertia::render('Index', [
        'users' => $users,
    ]);
});

Route::get('/admin-only-link', function () {
    return view('admin-only-link');
})->middleware('can:view-admin-link');

Route::post('/users/{id}', [UserController::class, 'update'])->name('users.update');
Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');

Route::get('/users/count', function () {
    $usersCount = User::count();
    return response()->json(['usersCount' => $usersCount,]);
});

Route::get('/Contact', function () {
    return Inertia::render('Contact');
});

Route::get('/About', function () {
    return Inertia::render('About');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/usersdashboard', function () {
        $users = User::all();
        return Inertia::render('UsersDashboard', [
            'users' => $users,
        ]);
    })->name('UsersDashboard');

    Route::get('/dashboard', [UserController::class, 'dashboard'])
        ->middleware(['verified', 'can:access-dashboard'])
        ->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/contact', [ContactController::class, 'send']);
Route::post('/contact/send', [ContactController::class, 'send'])->name('contact.send');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

require __DIR__ . '/auth.php';
