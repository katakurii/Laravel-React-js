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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::group(['prefix' => 'category'], function (){
    Route::get('/', 'API\CategoryController@index');
    Route::post('/create', 'API\CategoryController@store');
    Route::delete('/delete/{id}', 'API\CategoryController@destroy');
    Route::get('/edit/{id}', 'API\CategoryController@edit');
    Route::put('/update/{id}', 'API\CategoryController@update');
});
//Route::resource('category', 'API\CategoryController');
