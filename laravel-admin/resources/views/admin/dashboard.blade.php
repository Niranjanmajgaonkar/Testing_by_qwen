@extends('admin.layout')

@section('title', 'Dashboard')

@section('content')
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

    {{-- Stats cards --}}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div class="bg-white rounded-xl shadow p-5 border-l-4 border-indigo-500">
            <p class="text-sm text-gray-500">एकूण Users</p>
            <p class="text-3xl font-bold text-gray-800">{{ $stats['total_users'] }}</p>
        </div>
        <div class="bg-white rounded-xl shadow p-5 border-l-4 border-green-500">
            <p class="text-sm text-gray-500">एकूण Posts</p>
            <p class="text-3xl font-bold text-gray-800">{{ $stats['total_posts'] }}</p>
        </div>
        <div class="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500">
            <p class="text-sm text-gray-500">Published Posts</p>
            <p class="text-3xl font-bold text-gray-800">{{ $stats['published_posts'] }}</p>
        </div>
        <div class="bg-white rounded-xl shadow p-5 border-l-4 border-amber-500">
            <p class="text-sm text-gray-500">आज नवीन Users</p>
            <p class="text-3xl font-bold text-gray-800">{{ $stats['new_today'] }}</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {{-- Recent users --}}
        <div class="bg-white rounded-xl shadow p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-semibold text-gray-800">नवीन Users</h3>
                <a href="{{ route('admin.users.index') }}" class="text-sm text-indigo-600 hover:underline">सर्व पहा →</a>
            </div>
            @forelse ($recentUsers as $user)
                <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                        <p class="text-sm font-medium text-gray-800">{{ $user->name }}</p>
                        <p class="text-xs text-gray-500">{{ $user->email }}</p>
                    </div>
                    @if ($user->is_admin)
                        <span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Admin</span>
                    @endif
                </div>
            @empty
                <p class="text-sm text-gray-500">अजून कोणतेही user नाही.</p>
            @endforelse
        </div>

        {{-- Recent posts --}}
        <div class="bg-white rounded-xl shadow p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-semibold text-gray-800">नवीन Posts</h3>
                <a href="{{ route('admin.posts.index') }}" class="text-sm text-indigo-600 hover:underline">सर्व पहा →</a>
            </div>
            @forelse ($recentPosts as $post)
                <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                        <p class="text-sm font-medium text-gray-800">{{ $post->title }}</p>
                        <p class="text-xs text-gray-500">{{ $post->created_at->format('d M Y') }}</p>
                    </div>
                    <span class="text-xs px-2 py-1 rounded-full {{ $post->is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700' }}">
                        {{ $post->is_published ? 'Published' : 'Draft' }}
                    </span>
                </div>
            @empty
                <p class="text-sm text-gray-500">अजून कोणतीही post नाही.</p>
            @endforelse
        </div>
    </div>
@endsection
