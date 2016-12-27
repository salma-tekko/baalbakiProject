cms=angular.module('cms');



cms.controller('photosController2',function($scope,$http,Upload,$route){



news=JSON.parse($route.current.params.news);

console.log(news.news);

images =news.images;
$scope.images=images;
console.log(images);

// news=JSON.parse($route.current.params.news);

// console.log(news.coverPhoto);
// $scope.coverPhoto=news.coverPhoto;


$scope.delete=function(pic,index)
    {
    

        $http({
            method:'DELETE',
            url:'pic',
            params:{
                pic:pic
            }
        })
        .success(function(data){
            $scope.images.splice(index,1);
            console.log(data);
            alert("Successfully deleted");
            // location.reload();
        })
        .error(function(err){
            console.log(err);
        })
    }




$scope.add=function(newsId)
    {
        files=document.getElementById('images').files;


        for(i=0;i<files.length;i++)
        {
            var file = files[i];
            Upload.upload({
                url: 'uploadMedia',
                file: file,
                params:{
                  newsId:news.news.id,
                },
                progress: function(e){}
            }).then(function(data, status, headers, config) {
                console.log(data);
            });
        }
    }

});