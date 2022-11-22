<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// untuk mengaktifkan softdeletes pada table SubscriptionPlan
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlan extends Model
{
    // Sofdeletes harus di tambahin di dalam use
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'price',
        'active_period_in_months',
        'featured',
    ];
}
