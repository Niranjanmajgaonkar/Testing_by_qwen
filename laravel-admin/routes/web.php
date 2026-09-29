<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

// Public website homepage
Route::get('/', function () {
    return view('welcome');
});

// ---------- Admin Panel ----------

Route::prefix('admin')->name('admin.')->group(function () {
    // Authentication (login / logout)
    Route::middleware('guest')->group(function () {
        Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
        Route::post('login', [LoginController::class, 'login'])->name('login.attempt');
    });

    Route::post('logout', [LoginController::class, 'logout'])
        ->middleware('auth')
        ->name('logout');

    // Everything below requires a logged-in ADMIN user
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Posts (content) management — full CRUD
        Route::resource('posts', PostController::class)->except(['show']);

        // Users management — list, edit admin flag, delete
        Route::resource('users', UserController::class)
            ->only(['index', 'edit', 'update', 'destroy'])
            ->parameters(['users' => 'user']);
    });
});
