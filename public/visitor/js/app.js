/**
 * Created by Intaglio on 10/27/2016.
 */



visitor=angular.module('visitor',['ngRoute']);

	
visitor.directive('fancybox', function(){
  return {
    restrict: 'A',

    link: function(scope, element, attrs){
      $(element).fancybox({  
        type        :'iframe',
        scrolling   : 'no',
        maxWidth    : 800,
        maxHeight   : 400,
        fitToView   : true,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : true,
        openEffect  : 'none',
        closeEffect : 'none'
      });
    }
  }
});

visitor.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "home.html",
            controller:'homeController'
        })

        .when("/about", {
            templateUrl : "templates/about.html",
           // controller:'newsController'
        })

        .when("/videos", {
            templateUrl : "templates/videos.html",
            controller:'videosController'
        })

        .when("/career", {
            templateUrl : "templates/career.html",
            //controller:'homeController'
        })
       
        .when("/constructions", {
            templateUrl : "templates/constructions.html",
            //controller:'homeController'
        })

        .when("/eachNews/:news", {
            templateUrl : "templates/eachNews.html",
            controller:'eachNewsRoomController'
        })

        .when("/eachProject/:projects", {
            templateUrl : "templates/eachProject.html",
            controller:'eachProjectController'
        })

        .when("/eachVideo", {
            templateUrl : "templates/eachVideo.html",
            controller:'eachVideoController'
        })

        .when("/industries", {
            templateUrl : "templates/industries.html",
            //controller:'homeController'
        })

        .when("/newsroom", {
            templateUrl : "templates/newsroom.html",
            controller:'newsRoomController'
        })

        .when("/photos", {
            templateUrl : "templates/photos.html",
            controller:'photosController'
        })

        .when("/projects", {
            templateUrl : "templates/projects.html",
            controller:'projectsController'
        })

        .when("/pu_chemical", {
            templateUrl : "templates/pu_chemical.html",
            //controller:'homeController'
        })

        .when("/real_estate_agriculture", {
            templateUrl : "templates/real_estate_agriculture.html",
            //controller:'homeController'
        })

        .when("/trade", {
            templateUrl : "templates/trade.html",
            //controller:'homeController'
        })

        .when("/milestone", {
            templateUrl : "templates/milestone.html",
            //controller:'homeController'
        })
       
});


visitor.directive('mySlideshow', function () {


    return {
       restrict: 'AC',
      link: function (scope, element, attrs) {
        var config = angular.extend({
          slides: '.slide'
        }, scope.$eval(attrs.mySlideshow)); 
        setTimeout(function () {
         element.cycle(config);
        }, 0);
      }
    };
});