<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = [
            'movies' =>  Movies::withTrashed()->orderBy('deleted_at')->get(),
        ];
        return Inertia::render('Admin/Movie/index', $movies);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['name'], '-');
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));


        Movies::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Movie inserted successfully',
            'type' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function restore($slug)
    {
        Movies::withTrashed()->where('slug', $slug)->restore();
        // return $data;
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Restore movie successfully',
            'type' => 'success',
        ]);
    }

    public function showMovie(Movies $movies)
    {
        $data = ['movie' => $movies];
        return Inertia::render('Admin/Movie/ShowMovie', $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movies $movie)
    {
        $data = ['movie' => $movie];
        // dd($data);
        return Inertia::render('Admin/Movie/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, Movies $movie)
    {
        $data = $request->validated();

        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Movie updated Successfully',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movies $movie)
    {
        $movie->delete();

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Delete Movie Successfully",
            'type' => 'success',
        ]);
    }
}
