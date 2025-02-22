<?php

declare(strict_types=1);

namespace App\Http\Controllers\Home;

use App;
use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Response;

class FeedController extends Controller
{
    public function index(): Response
    {
        $articles = Article::latest()->get();

        $feed              = App::make('feed');
        $feed->title       = config('app.name');
        $feed->description = config('bjyblog.head.description');
        $feed->logo        = asset('uploads/avatar/1.jpg');
        $feed->link        = url('feed');
        $feed->setDateFormat('carbon');
        $feed->pubdate     = $articles->first()->created_at ?? '';
        $feed->lang        = config('app.locale');
        $feed->ctype       = 'application/xml';
        $feed->setShortening(true);
        $feed->setTextLimit(100);

        foreach ($articles as $article) {
            $feed->addItem([
                'title'       => $article->title,
                'author'      => $article->author,
                'link'        => url('article', $article->id),
                'description' => $article->description,
                'content'     => $article->html,
                'pubdate'     => \Carbon\Carbon::parse($article->created_at)->format('c'),
            ]);
        }

        return $feed->render('atom');
    }
}
