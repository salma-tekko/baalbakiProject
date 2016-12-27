
/**
 * Created by Intaglio on 10/27/2016.
 */



cms=angular.module('cms',['ngRoute','ngFileUpload']);



cms.config(function($routeProvider) {
    $routeProvider
        .when("/news", {
            templateUrl : "templates/news.html",
            controller:'newsController'
        })
        .when('/videos',{
            templateUrl : "templates/videos.html",
            controller:'videosController'
        })

        .when('/coverPic/:news',{
            templateUrl : "templates/coverPic.html",
            controller:'photosController'
        })

        .when('/photos/:news',{
            templateUrl : "templates/photos.html",
            controller:'photosController2'
        })


});