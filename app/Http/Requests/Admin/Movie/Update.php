<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
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
            'name' => 'nullable|string|max:100|unique:movies,name,'.$this->movie->id,
            'category' => 'nullable|string|max:100',
            'video_url' => 'nullable|url|max:100',
            'rating' => 'nullable|numeric|min:0|max:5',
            'thumbnail' => 'nullable|image',
            'is_featured' => 'boolean'
        ];
    }
}
