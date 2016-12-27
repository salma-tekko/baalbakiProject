
visitor=angular.module('visitor');



visitor.controller('eachProjectController',function($scope,$http,$route){


project=$route.current.params.projects;
project=JSON.parse(project);
$scope.project=project;

console.log(project);

carousel=$('#newsCarousel');
for(i=0;i<project.images.length;i++)
{
	img="<img src=cmsImages/" + project.images[i].link +">";
	carousel.append(img);
}
$('.cycle-slideshow').cycle();


})	