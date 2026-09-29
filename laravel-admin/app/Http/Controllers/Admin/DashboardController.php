<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        $stats = [
            'total_users' => User::count(),
            'total_posts' => Post::count(),
            'published_posts' => Post::where('is_published', true)->count(),
            'new_today' => User::whereDate('created_at', Carbon::today())->count(),
        ];

        $recentUsers = User::latest()->take(5)->get();
        $recentPosts = Post::with('author')->latest()->take(5)->get();

        return view('admin.dashboard', compact('stats', 'recentUsers', 'recentPosts'));
    }
}
