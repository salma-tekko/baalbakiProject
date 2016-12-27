<?php

namespace App\Http\Middleware;

use Closure;

class userMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $userSession=$request->getSession()->get('userId');

        if(!empty($userSession))
        {
            return $next($request);
        }
        else
        {
            $data = [
                'flag'=>0,
                'error'=>'Not Authorized',
            ];
            return \Response::json($data);
        }
    }
}
