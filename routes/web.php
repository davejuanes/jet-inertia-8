<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PageController;

Route::view('/', 'index');

Route::get('dashboard', [PageController::class, 'dashboard'])
    ->middleware('auth:sanctum')
    ->name('dashboard');