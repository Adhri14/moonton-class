<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show(Movies $movies)
    {
        $data = ["data" => $movies];
        return Inertia::render('User/Movie/Show', $data);
    }
}
