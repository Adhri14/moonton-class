<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin'); 
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:100|unique:movies,name',
            'category' => 'required|string|max:100',
            'video_url' => 'required|url|max:100',
            'rating' => 'required|numeric|min:0|max:5',
            'thumbnail' => 'image',
            'is_featured' => 'boolean'
        ];
    }
}
