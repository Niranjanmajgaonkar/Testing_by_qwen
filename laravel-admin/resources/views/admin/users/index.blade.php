@extends('admin.layout')

@section('title', 'Users')

@section('content')
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Users</h2>
    </div>

    {{-- Search --}}
    <form method="GET" action="{{ route('admin.users.index') }}" class="mb-5 flex gap-2 max-w-md">
        <input type="text" name="search" value="{{ $search ?? '' }}" placeholder="Name किंवा Email ने search करा..."
               class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <button class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">Search</button>
    </form>

    <div class="bg-white rounded-xl shadow overflow-hidden">
        <table class="w-full text-sm">
            <thead class="bg-gray-50 text-gray-600">
                <tr>
                    <th class="text-left px-5 py-3">#</th>
                    <th class="text-left px-5 py-3">Name</th>
                    <th class="text-left px-5 py-3">Email</th>
                    <th class="text-left px-5 py-3">Role</th>
                    <th class="text-left px-5 py-3">Joined</th>
                    <th class="text-right px-5 py-3">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
                @forelse ($users as $user)
                    <tr class="hover:bg-gray-50">
                        <td class="px-5 py-3 text-gray-500">{{ $user->id }}</td>
                        <td class="px-5 py-3 font-medium text-gray-800">{{ $user->name }}</td>
                        <td class="px-5 py-3 text-gray-600">{{ $user->email }}</td>
                        <td class="px-5 py-3">
                            <span class="text-xs px-2 py-1 rounded-full {{ $user->is_admin ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600' }}">
                                {{ $user->is_admin ? 'Admin' : 'User' }}
                            </span>
                        </td>
                        <td class="px-5 py-3 text-gray-600">{{ $user->created_at->format('d M Y') }}</td>
                        <td class="px-5 py-3 text-right space-x-2 whitespace-nowrap">
                            <a href="{{ route('admin.users.edit', $user) }}" class="text-indigo-600 hover:underline">Edit</a>
                            @if ($user->id !== auth()->id())
                                <form method="POST" action="{{ route('admin.users.destroy', $user) }}" class="inline"
                                      onsubmit="return confirm('हा user delete करायचा?');">
                                    @csrf
                                    @method('DELETE')
                                    <button class="text-red-600 hover:underline">Delete</button>
                                </form>
                            @endif
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="px-5 py-8 text-center text-gray-500">काहीही user सापडला नाही.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-5">
        {{ $users->links() }}
    </div>
@endsection
