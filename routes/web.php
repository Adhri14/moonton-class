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
    Route::get('subscription-plan-success', function() {
        return Inertia::render("User/Payment/Status/Success");
    })->name('success.payment')->middleware('checkUserSubscription:true');
    Route::get('subscription-plan-failed', function() {
        return Inertia::render("User/Payment/Status/Failed");
    })->name('failed.payment')->middleware('checkUserSubscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function() {
    Route::resource('movie', AdminMovieController::class);
    Route::get('movie/{movie:id}/edit', [AdminMovieController::class, 'edit'])->name('movie.edit');
    Route::put('movie/{slug}/restore', [AdminMovieController::class, 'restore'])->name('movie.restore');
    Route::get('movie/show-movie/{movies:slug}', [AdminMovieController::class, 'showMovie'])->name('movie.showMovie');
});

Route::prefix("prototype")->name("prototype.")->group(function() {
    Route::get("/login", function() {
        return Inertia::render("Prototype/Login");
    })->name('login');
    Route::get("/register", function() {
        return Inertia::render("Prototype/Register");
    })->name('register');
    Route::get("/dashboard", function() {
        return Inertia::render("Prototype/Dashboard", ["link" => "dashboard"]);
    })->name('dashboard');
    Route::get("/payments", function() {
        return Inertia::render("Prototype/Payments", ["link" => "payments"]);
    })->name('payments');
    Route::get("/movie/{slug}", function() {
        return Inertia::render("Prototype/Movie/Show");
    })->name('movie.show');
});

require __DIR__.'/auth.php';
