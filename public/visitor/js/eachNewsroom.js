
visitor=angular.module('visitor');

visitor.controller('eachNewsRoomController',function($scope,$http,$route){

	console.log($route.current.params.news);
	var itemId = $route.current.params.news;
	console.log(itemId);

	$scope.getNewsById = function(itemId) {
		$http({
			method:'GET',
			url:'getNewsById',
			params:{
				newsId:itemId,
			}
		})
		.success(function(data){
			console.log(data);
			var news = data;
			$scope.news=data;

			carousel=$('#newsCarousel');
			for(i=0;i<news.images.length;i++)
			{
				img="<img src=cmsImages/" + news.images[i].link +">";
				carousel.append(img);
			}
			$('.cycle-slideshow').cycle();

		})
		.error(function(error)
		{
			console.log(error);
		})		
	}

	$scope.getNewsById(itemId);

})

/*console.log($route.current.params);
return;

console.log($route.current.params.news);

var search = $route.current.params.news;
//var news = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
var news = JSON.parse('{"' + decodeURI(search.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
console.log(news);*/

//news=JSON.parse($route.current.params.news);

//var json_data = JSON.stringify(news);
//console.log(json_data);

/*$scope.news=news;

carousel=$('#newsCarousel');
for(i=0;i<news.images.length;i++)
{
	img="<img src=cmsImages/" + news.images[i].link +">";
	carousel.append(img);
}
$('.cycle-slideshow').cycle();
});
*/