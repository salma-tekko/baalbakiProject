visitor=angular.module('visitor');


visitor.controller('homeController',function($scope,$http){








	getNews(1).then(function(data){

		console.log('get news');

					// news1="<div> dasdasdsadassad </div><div> dasdasdsadassad </div>";
					// $("#newsroom").append(news1);
					//$('.cycle-slideshow').cycle(); 
					//alert(news1);
					$(".regular").slick({
						dots: true,
						arrows: false,
						infinite: false,
						slidesToShow: 1,
						slidesToScroll: 1
					});

					

					news=data.data;
					console.log(news);


					news.forEach(function(item , index) {
						if (index < 3) {
							console.log(item.news);
							console.log(item);
							/*currentNews=JSON.stringify(item.news);
							//var news = JSON.stringify(item.news);
							url = Object.keys(item.news).map(function(k) {
								return encodeURIComponent(k) + '=' + encodeURIComponent(item.news[k])
							}).join('&');*/
							//var recursiveEncoded = $.param( item );
							//var recursiveDecoded = decodeURIComponent( $.param( myObject ) );recursiveEncoded
						//	console.log(recursiveEncoded);
							$(".regular").slick('slickAdd','<div><h1 class="sec_main_title2"><a href="#/eachNews/'+item.news.id+'">'+item.news.title+'</a></h1>'+item.news.content+'</div>');
						}
					})


				/*	for(i=0;i<3;i++)
					{
						currentNew=news[i];
						console.log(currentNew);

						$(".regular").slick('slickAdd','<div><h1 class="sec_main_title2"><a href="#/eachNews/'+currentNew+'">'+currentNew.news.title+'</a></h1>'+currentNew.news.content+'</div>');

					}*/





					console.log(data);
				})


	function getNews(type)
	{
		return new Promise(function(resolve){
			$http({
				method:'GET',
				url:'news',
				params :{
					type:type
				}
			}).then(function(data){
				resolve(data)
				/*	$('.cycle-slideshow').cycle();*/
			})
		})

	}

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
			$scope.news=data; 

/*			setTimeout(function(){ 
     	 appendNews(data);
     	}, 1500);*/



			//create div element
			//append h1
			//h1 give


			// carousel=$('#newsCarousel');

			// for(i=0;i<data.length;i++)
			// {
			// 	news1="<div><h1 class='sec_main_title2'>+''+</h1>";
			// 	carousel.append(news1);
			// }

			// $('.cycle-slideshow').cycle();


			console.log(data);
		})
		.error(function(error)
		{
			console.log(error);
		})

		console.log('get news');
	}


	// $scope.getVideos=function()
	// {
	// 	$http({
	// 		method:'GET',
	// 		url:'videos'
	// 	})
	// 	.success(function(data){
	// 		$scope.videos=data;
	// 		console.log(data);
	// 	})
	// 	.error(function(err){
	// 		console.log(err);
	// 	})

	// }


	function appendNews(){


		console.log('das');

	}


});