
visitor=angular.module('visitor');



visitor.controller('projectsController',function($scope,$http,$location,$rootScope){


$scope.getProjects=function(type)
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
			
			$scope.projects=data; 
			
				$("#content_1").mCustomScrollbar({
                    scrollButtons:{
                        enable:true
                    },
                    advanced:{  
				        updateOnBrowserResize:true,   
				        updateOnContentResize:true   
				      }
                });
			
			
				var x = $(window).height() - 543;
				x = x / (285 + 20); 
				x = Math.floor(x);

				setTimeout(function(){ 
                      if(x<0)
						$('.projects_list ul li').each(function(){
							$(this).addClass('hideme');	
						});

						else if(x>=0) {
							for(var i = 4; i <= $('.projects_list ul li').length ; i++) {
								var liClass = '.projects_list ul li:nth-child('+i+')';	
								$(liClass).addClass('hideme');
							}
						}

                    }, 800);


				
		
			console.log(data);
		})
		.error(function(error)
		{
			console.log(error);
		})

		console.log('get projects');
	}



})