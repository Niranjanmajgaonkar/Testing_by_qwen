@extends('admin.layout')

@section('title', 'Posts')

@section('content')
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Posts / Content</h2>
        <a href="{{ route('admin.posts.create') }}"
           class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            + नवीन Post
        </a>
    </div>

    {{-- Search --}}
    <form method="GET" action="{{ route('admin.posts.index') }}" class="mb-5 flex gap-2 max-w-md">
        <input type="text" name="search" value="{{ $search ?? '' }}" placeholder="Title ने search करा..."
               class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <button class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">Search</button>
    </form>

    <div class="bg-white rounded-xl shadow overflow-hidden">
        <table class="w-full text-sm">
            <thead class="bg-gray-50 text-gray-600">
                <tr>
                    <th class="text-left px-5 py-3">#</th>
                    <th class="text-left px-5 py-3">Title</th>
                    <th class="text-left px-5 py-3">Status</th>
                    <th class="text-left px-5 py-3">Author</th>
                    <th class="text-left px-5 py-3">Date</th>
                    <th class="text-right px-5 py-3">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
                @forelse ($posts as $post)
                    <tr class="hover:bg-gray-50">
                        <td class="px-5 py-3 text-gray-500">{{ $post->id }}</td>
                        <td class="px-5 py-3 font-medium text-gray-800">{{ $post->title }}</td>
                        <td class="px-5 py-3">
                            <span class="text-xs px-2 py-1 rounded-full {{ $post->is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700' }}">
                                {{ $post->is_published ? 'Published' : 'Draft' }}
                            </span>
                        </td>
                        <td class="px-5 py-3 text-gray-600">{{ $post->author?->name ?? '—' }}</td>
                        <td class="px-5 py-3 text-gray-600">{{ $post->created_at->format('d M Y') }}</td>
                        <td class="px-5 py-3 text-right space-x-2 whitespace-nowrap">
                            <a href="{{ route('admin.posts.edit', $post) }}" class="text-indigo-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.posts.destroy', $post) }}" class="inline"
                                  onsubmit="return confirm('ही post delete करायची?');">
                                @csrf
                                @method('DELETE')
                                <button class="text-red-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="px-5 py-8 text-center text-gray-500">काहीही post सापडली नाही.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-5">
        {{ $posts->links() }}
    </div>
@endsection
