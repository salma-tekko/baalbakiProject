<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('cms/index',function(\Symfony\Component\HttpFoundation\Request $request){

   $userSession=$request->getSession()->get('userId');

    if(!empty($userSession))
    {
        return redirect('cms/app.html');
    }
    else
    {
        return redirect('cms/login.html');
    }
});

/*Route::group(['middleware' => ['userMiddleWare']], function () {*/

    Route::get('cms/logout',function(\Symfony\Component\HttpFoundation\Request $request){

        $request->session()->flush();
        return redirect('cms/login.html');
        return 'session flushed';
    });

    Route::post('cms/news','adminController@addNews');
    Route::put('cms/news','adminController@updateNews');
    Route::post('cms/uploadMedia','adminController@uploadMedia');
    Route::post('cms/uploadMedia2','adminController@uploadMedia2');
    Route::post('cms/video','adminController@addVideo');

    Route::get('cms/news','visitorController@getNews');

    Route::get('cms/videos','visitorController@getVideos');
    Route::put('cms/video','adminController@updateVideo');
    Route::delete('cms/video','adminController@deleteVideo');
    Route::delete('cms/news','adminController@deleteNews');
    Route::delete('cms/coverPic','adminController@deleteCoverPic');
    Route::delete('cms/pic','adminController@deletePic');
     

/*});*/

Route::post('cms/login','adminController@login');

Route::get('visitor/news','visitorController@getNews');
Route::get('visitor/videos','visitorController@getVideos');
Route::post('visitor/email','visitorController@sendEmail');