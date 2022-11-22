<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() 
    {

        $movieFeatured = Movies::whereIsFeatured(true)->get();
        $movie = Movies::whereIsFeatured(false)->get();

        $data = [
            "featureMovie" => $movieFeatured,
            "browse" => $movie,
        ];

        // dd(Auth::user()->isActive);

        return Inertia::render('User/Dashboard/index', $data);
    }
}
