<?php

namespace App\Http\Controllers;

use App\image;
use App\news;
use App\user;
use App\video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;

class adminController extends Controller
{

    public function login(Request $request)
    {
        $userName=$request->input('userName');
        $password=$request->input('password');

        $users=user::where('userName',$userName)
            ->get();

        if(count($users)==1)
        {
            $hashedPassword=$users[0]['password'];


            if (Hash::check($password, $hashedPassword))
            {

                $request->session()->put('userId',$users[0]['id']);
                return redirect('cms/app.html');

            }
            else
            {
                return redirect('cms/login.html');
            }
        }
        else
        {
            return redirect('cms/login.html');
        }


    }
    public function addNews(Request $request)
    {
        $news=$request->input('news');
        $news=json_decode($news,true);

        if(empty($news['videoLink']))
        {
        
        }
        else
        {
               $news['videoLink']=explode('=', $news['videoLink']);
               $news['videoLink']=$news['videoLink'][1];
        }

        // if(empty($news['coverPhoto']))
        // {

        // }

        // else{
        //         $data=Input::file('file');
        //         $newsId=$request->input('newsId');
        //         $destinationPath='visitor/cmsImages';
        //         $fileName=rand(1,1000);

        //         $coverPhoto=$fileName.'.jpeg';
        //         $data->move($destinationPath, $fileName.'.jpeg');
        // }


        $latestNews = news::create($news);

        return $latestNews->id; 
    }

    public function updateNews(Request $request)
    {
        $news=$request->input('news');
        $news=json_decode($news,true);
   
        if(empty($news['videoLink']))
        {
        
        }
        else
        {
               $news['videoLink']=explode('=', $news['videoLink']);
               $news['videoLink']=$news['videoLink'][1];
        }
      
         return news::where('id',$news['id'])
        ->update($news);



    }

    public function deleteNews(Request $request)
    {

        $news=$request->input('news');

        $news=json_decode($news,true);

        return news::where('id',$news['id'])
        ->delete();



    }

    public function addVideo(Request $request)
    {
        $video=$request->input('video');
        $video=json_decode($video,true);
        $video['link']=explode('=', $video['link']);
        $video['link']=$video['link'][1];
        //$video['link']='https://www.youtube.com/embed/'.$video['link'][1];

        video::create($video);
        return $video;
    }

    public function updateVideo(Request $request)
    {
        $video=$request->input('video');
        $video=json_decode($video,true);

        $video['link']=explode('=', $video['link']);
        $video['link']=$video['link'][1];


        return video::where('id',$video['id'])
        ->update($video);
    }



    public function deleteVideo(Request $request)
    {

        $video=$request->input('video');

        $video=json_decode($video,true);

        return video::where('id',$video['id'])
        ->delete();



    }


    public function uploadMedia(Request $request)
    {
        $data=Input::file('file');
        $newsId=$request->input('newsId');
        $destinationPath='visitor/cmsImages';
        $fileName=rand(1,1000);

        $link=$fileName.'.jpeg';
        $data->move($destinationPath, $fileName.'.jpeg');


      return  image::create([
            'link'=>$link,
            'news_id'=>$newsId,
        ]);

    }

    public function uploadMedia2(Request $request)
    {
        $data=Input::file('file');
        $newsId=$request->input('newsId');
        $destinationPath='visitor/coverPic';
        $fileName=rand(1,1000);

        $coverPhoto=$fileName.'.jpeg';
        $data->move($destinationPath, $fileName.'.jpeg');

       return news::where('id',$newsId)
        ->update(
            [
            'coverPhoto'=>$coverPhoto,
            ]
            );

    }


    public function deleteCoverPic(Request $request)
    {

            $destinationPath='visitor/coverPic';

      

             

        $news=$request->input('news');
        $news=json_decode($news,true);

  
       
            
             unlink($destinationPath.'/'.$news['coverPhoto']);
            return news::where('id',$news['id'])
                        ->update
                            (
                    [
                'coverPhoto'=>'',
                        ]
                 );

        return $news;


       
        

    }


    public function deletePic(Request $request)
    {

            $destinationPath='visitor/cmsImages';   
            $picture=$request->input('pic');
            $picture=json_decode($picture,true);


            unlink($destinationPath.'/'.$picture['link']);
            

            return image::where('id',$picture['id'])
        ->delete();

    }

    
}