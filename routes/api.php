<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('/login', 'api\AuthController@login')->name('login_api');
});

Route::middleware(['auth.user'])->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('/logout', 'api\AuthController@logout')->name('logout_api');
        Route::post('/dashboard', 'api\DashboardController@dashboard')->name('dashboard_api');
        Route::post('/details', 'api\DetailController@detail')->name('detail_api');
        Route::post('/edit', 'api\DetailController@edit')->name('edit_detail_api');
    });
});
