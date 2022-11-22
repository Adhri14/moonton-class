<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// MIDTRANS ROUTE
Route::post('midtrans/notification', [SubscriptionPlanController::class, 'midtransCallback']);

Route::redirect("/", '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function() {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('movie/{movies:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true'); // {movies:slug} digunakan untuk mengambil key slug dari movie yg di lempar
    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscription.plan')->middleware('checkUserSubscription:false');
    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'subscribe'])->name('subscription.userSubscribe')->middleware('checkUserSubscription:false');
    Route::get('subscription-plan-success', [SubscriptionPlanController::class, 'paymentSuccess'])->name('success.payment')->middleware('checkUserSubscription:true');
    Route::get('subscription-plan-failed', [SubscriptionPlanController::class, 'paymentFailed'])->name('failed.payment')->middleware('checkUserSubscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function() {
    Route::resource('movie', AdminMovieController::class);
    Route::get('movie/{movie:id}/edit', [AdminMovieController::class, 'edit'])->name('movie.edit');
    Route::put('movie/{slug}/restore', [AdminMovieController::class, 'restore'])->name('movie.restore');
    Route::get('movie/show-movie/{movies:slug}', [AdminMovieController::class, 'showMovie'])->name('movie.showMovie');
});

require __DIR__.'/auth.php';
