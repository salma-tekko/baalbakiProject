
visitor=angular.module('visitor');



visitor.controller('photosController',function($scope,$http,$location,$rootScope){

	$scope.getPhotos=function(type)
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
			
			$scope.photos=data;

			

				setTimeout(function(){ 

						
							for(var i = 9; i <= $('.photos_wrapper ul li').length ; i++) {
								var liClass = '.photos_wrapper ul li:nth-child('+i+')';	
								$(liClass).addClass('hideme');
							}
						

                    }, 800);

			console.log(data);

		})
		.error(function(error)
		{
			console.log(error);
		})

		console.log('get photos');
	}

	// $scope.fancyGallary = function(images) {
	// 	$scope.fancyImages = images;

	// 	console.log(images);

	// 	$(".fancybox-thumb").fancybox({
	// 		prevEffect	: 'none',
	// 		nextEffect	: 'none',
	// 		helpers	: {
	// 			title	: {
	// 				type: 'outside'
	// 			},
	// 			thumbs	: {
	// 				width	: 50,
	// 				height	: 50
	// 			}
	// 		}
	// 	});
	//}



});


