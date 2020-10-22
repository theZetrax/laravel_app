<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\PostsController;
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

Route::group([], function() {
    Route::get('/', [PagesController::class, 'Index'])->name('home');
    Route::get('/about', [PagesController::class, 'About'])->name('about');
    Route::get('/services', [PagesController::class, 'Services'])->name('services');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);
Route::resource('posts', PostsController::class)->names([
    'create' => 'posts.create',
    'show' => 'posts.view',
    'edit' => 'posts.edit',
    'index' => 'posts.index',
    'store' => 'posts.store',
    'update' => 'posts.update',
    'destroy' => 'posts.destroy'
]);
