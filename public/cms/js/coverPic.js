cms=angular.module('cms');



cms.controller('photosController',function($scope,$http,Upload,$route){

console.log($route.current.params.news);

news=JSON.parse($route.current.params.news);

console.log(news);
$scope.coverPhoto=news.coverPhoto;



$scope.delete=function(coverPic)
    {
        $http({
            method:'DELETE',
            url:'coverPic',
            params:{
                news:news
            }
        })
        .success(function(data){
            console.log(data);
            alert("Successfully deleted");
            location.reload();
        })
        .error(function(err){
            console.log(err);
        })
    }


$scope.update=function (newsId)
    {
        

        files=document.getElementById('coverPhoto').files;

            var file = files[0];
            Upload.upload({
                url: 'uploadMedia2',
                file: file,
                params:{
                  newsId:news.id,
                },
                progress: function(e){}
            }).then(function(data, status, headers, config) {
                console.log(data);
                history.back();
            });
        
    }



});