<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PostController extends Controller
{
    public function index(Request $request): View
    {
        $query = Post::with('author')->latest();

        if ($search = $request->query('search')) {
            $query->where('title', 'like', "%{$search}%");
        }

        return view('admin.posts.index', [
            'posts' => $query->paginate(10)->withQueryString(),
            'search' => $search,
        ]);
    }

    public function create(): View
    {
        return view('admin.posts.form', ['post' => new Post]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
            'is_published' => ['boolean'],
        ]);

        $data['user_id'] = $request->user()->id;
        $data['is_published'] = $request->boolean('is_published');

        Post::create($data);

        return redirect()->route('admin.posts.index')->with('success', 'Post तयार झाली!');
    }

    public function edit(Post $post): View
    {
        return view('admin.posts.form', compact('post'));
    }

    public function update(Request $request, Post $post): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
        ]);

        $data['is_published'] = $request->boolean('is_published');
        $post->update($data);

        return redirect()->route('admin.posts.index')->with('success', 'Post अपडेट झाली!');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $post->delete();

        return redirect()->route('admin.posts.index')->with('success', 'Post delete झाली!');
    }
}
