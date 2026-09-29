@extends('admin.layout')

@section('title', $post->exists ? 'Edit Post' : 'New Post')

@section('content')
    <h2 class="text-2xl font-bold text-gray-800 mb-6">
        {{ $post->exists ? 'Post Edit करा' : 'नवीन Post तयार करा' }}
    </h2>

    <form method="POST"
          action="{{ $post->exists ? route('admin.posts.update', $post) : route('admin.posts.store') }}"
          class="bg-white rounded-xl shadow p-6 max-w-2xl space-y-5">
        @csrf
        @if ($post->exists)
            @method('PUT')
        @endif

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input type="text" name="title" value="{{ old('title', $post->title) }}" required
                   class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea name="content" rows="8"
                      class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">{{ old('content', $post->content) }}</textarea>
        </div>

        <label class="flex items-center gap-2 text-sm text-gray-700">
            <input type="hidden" name="is_published" value="0">
            <input type="checkbox" name="is_published" value="1"
                   class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                   {{ old('is_published', $post->is_published) ? 'checked' : '' }}>
            ही Post publish करा
        </label>

        <div class="flex gap-3 pt-2">
            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
                {{ $post->exists ? 'Update करा' : 'Save करा' }}
            </button>
            <a href="{{ route('admin.posts.index') }}" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm">
                रद्द करा
            </a>
        </div>
    </form>
@endsection
