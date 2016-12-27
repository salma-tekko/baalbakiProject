/**
 * Created by Intaglio on 10/27/2016.
 */


cms=angular.module('cms');



cms.controller('newsController',function($scope,$http,Upload){


    $scope.getNews=function(type)
    {
        console.log(type);


        $http({
            method:'GET',
            url:'news',
            params:{
                type:type
            }
        })
        .success(function(data){
            $scope.dataNews=data;
            console.log(data);
        })

        return;


    }
   
    $scope.edit=function(news)  
    {
        
        $http({
            method:'PUT',
            url:'news',
            params:{
                news:news
            }
        })
        .success(function(data){
            console.log(data);
            //location.reload();
        })
        .error(function(err){
            console.log(err);
        })
    }

    $scope.delete=function(news)
    {
        $http({
            method:'DELETE',
            url:'news',
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


    $scope.add=function(news)
    {



        $http({
            method:'POST',
            url:'news',
            params:{
                news:news
            }
        })
            .success(function(data){
                alert("Successfully added");
                console.log(data);
            
                uploadCoverPhoto(data);
                uploadImage(data);
            })
            .error(function(err){
                console.log(err);
            })
    }


    function uploadImage(newsId)
    {
        files=document.getElementById('images').files;

        for(i=0;i<files.length;i++)
        {
            var file = files[i];
            Upload.upload({
                url: 'uploadMedia',
                file: file,
                params:{
                  newsId:newsId,
                },
                progress: function(e){}
            }).then(function(data, status, headers, config) {
                console.log(data);
            });
        }
    }

    function uploadCoverPhoto(newsId)
    {
        files=document.getElementById('coverPhoto').files;

            var file = files[0];
            Upload.upload({
                url: 'uploadMedia2',
                file: file,
                params:{
                  newsId:newsId,
                },
                progress: function(e){}
            }).then(function(data, status, headers, config) {
                console.log(data);
            });
        
    }


})