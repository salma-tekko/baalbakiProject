<?php

namespace App\Http\Controllers;

use App\news;
use App\video;
use Illuminate\Http\Request;

class visitorController extends Controller
{

  public function getNewsById(Request $request)
  {

    $newsId=$request->input('newsId');
    $response=[];

    $news=news::find($newsId);
    $response['news']=$news;
    $response['images']=$news->images;

    return $response;
}

public function getNews(Request $request)
{
    $type=$request->input('type');
    $results=[];
    $news= news::where('type',$type)
    ->orderBy('id','desc')
    ->get();
    for($x=0;$x<count($news);$x++)
    {
        $currentNews=[];
        $currentNews['news']=$news[$x];
        $images=news::find($news[$x]['id'])->images;
        $currentNews['images']=$images;

        array_push($results,$currentNews);
    }
    return $results;
}

public function getVideos()
{
    return video::all();
}

public function sendEmail(Request $request)
{
    $email=$request->input('email');

    return $email;
}



}
