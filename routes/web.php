<?php

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
    return view('index');
});

Auth::routes();

Route::get('/add/pizza', 'ResourceController@create');

Route::get('/category', 'ResourceController@category');

Route::post('/add/category', 'ResourceController@add');

Route::post('/add', 'ResourceController@store');

Route::delete('/category/{id}', 'ResourceController@destroy');

Route::delete('/pizza/{id}', 'ResourceController@pizzaDelete');

Route::get('/home', 'ResourceController@index')->name('home');
