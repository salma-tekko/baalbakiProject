
visitor=angular.module('visitor');

visitor.controller('eachNewsRoomController',function($scope,$http,$route){

news=JSON.parse($route.current.params.news);
$scope.news=news;
carousel=$('#newsCarousel');
for(i=0;i<news.images.length;i++)
{
	img="<img src=cmsImages/" + news.images[i].link +">";
	carousel.append(img);
}
$('.cycle-slideshow').cycle();
});
