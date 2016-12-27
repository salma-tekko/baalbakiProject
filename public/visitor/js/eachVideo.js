
visitor=angular.module('visitor');



visitor.controller('eachVideoController',function($scope,$http,$route){


url=window.location.href;


videoLink=grabData(url,'videoLink');
videoTitle=grabData(url,'videoTitle');
videoContent=grabData(url,'videoContent');

video = {
  link:videoLink,
	title:videoTitle,
	content:videoContent
}

$scope.video = video;



function grabData(url,dataName) {

  url=url.split('?');
  url=url[1];
  url=url.split('&');

  for(i=0;i<url.length;i++)
  {
    fieldName=url[i].split('=');
    if(fieldName[0]==dataName)
    {
      return fieldName[1];
    }

  }
  return -1;
  return;
  console.log(url);

}



})