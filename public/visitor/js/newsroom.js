
visitor=angular.module('visitor');



visitor.controller('newsRoomController',function($scope,$http,$location,$rootScope){




console.log("hissss");




$scope.getNews=function(type)
	{

		$http({
			method:'GET',
			url:'news',
			params:{
				type:type,
			}
		})
		.success(function(data){
			console.log(data);
			
			mainNew=data.splice(0,1);
			$scope.mainNew=mainNew;
			console.log(mainNew);
		
			set1=data.splice(0,4);
			$scope.set1=set1;
			setRest=data;
			$scope.setRest=setRest;
			
			

		
			console.log(data);
		})
		.error(function(error)
		{
			console.log(error);
		})

		console.log('get news');
	}



})