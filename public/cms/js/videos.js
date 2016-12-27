/**
 * Created by Intaglio on 10/27/2016.
 */
/**
 * Created by Intaglio on 10/27/2016.
 */


cms=angular.module('cms');



cms.controller('videosController',function($scope,$http,Upload){




    $scope.add=function(video)
    {
        $http({
            method:'POST',
            url:'video',
            params:{
                video:video
            }
        })
            .success(function(data){
                alert("Successfully added");
                console.log(data);
            })
            .error(function(err){
                console.log(err);
            })
    }

    $scope.edit=function(video)
    {
        $http({
            method:'PUT',
            url:'video',
            params:{
                video:video
            }
        })
        .success(function(data){
            console.log(data);
            location.reload();
        })
        .error(function(err){
            console.log(err);
        })
    }

    $scope.delete=function(video)
    {
        $http({
            method:'DELETE',
            url:'video',
            params:{
                video:video
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

    $scope.getVideos=function()
    {


        $http({
            method:'GET',   
            url:'videos',

        })
        .success(function(data){
            $scope.videos=data; 
            console.log(data);
        })
        .error(function(error)
        {
            console.log(error);
        })

        console.log('get videos');
    }


})