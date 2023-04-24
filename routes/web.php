<?php

use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/usersdashboard', function () {
    $users = User::all();

    return Inertia::render('UsersDashboard', [
        'users' => $users,
    ]);
})->middleware(['auth'])->name('UsersDashboard');

Route::get('/', function () {
    $users = App\Models\User::all();
    return Inertia::render('Index', [
        'users' => $users,
    ]);
});

Route::get('/admin-only-link', function () {
    return view('admin-only-link');
})->middleware('can:view-admin-link');

Route::get('/admin-only-link', function () {
    return view('admin-only-link');
})->middleware('can:view-admin-link');

Route::post('/users/{id}', [UserController::class, 'update'])->name('users.update');
Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/Contact', function () {
    return Inertia::render('Contact');
});

Route::get('/About', function () {
    return Inertia::render('About');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
