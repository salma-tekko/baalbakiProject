
visitor=angular.module('visitor');



visitor.controller('videosController',function($scope,$http,$location,$rootScope){



$scope.getVideos=function()
	{

		$http({
			method:'GET',	
			url:'videos',

		})
		.success(function(data){
			$scope.videos=data; 
			console.log(data);
		})
		.error(function(error)
		{
			console.log(error);
		})

		console.log('get videos');
	}



})