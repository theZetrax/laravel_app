<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', [PagesController::class, 'Index']);
// Route::get('/about', [PagesController::class, 'About']);
// Route::get('/services', [PagesController::class, 'Services']);

Route::group([], function() {
    Route::get('/', [PagesController::class, 'Index']);
    Route::get('/about', [PagesController::class, 'About']);
    Route::get('/services', [PagesController::class, 'Services']);
});
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
