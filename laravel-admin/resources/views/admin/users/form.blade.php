@extends('admin.layout')

@section('title', 'Edit User')

@section('content')
    <h2 class="text-2xl font-bold text-gray-800 mb-6">User Edit करा: {{ $user->name }}</h2>

    <form method="POST" action="{{ route('admin.users.update', $user) }}"
          class="bg-white rounded-xl shadow p-6 max-w-xl space-y-5">
        @csrf
        @method('PUT')

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input type="text" name="name" value="{{ old('name', $user->name) }}" required
                   class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" name="email" value="{{ old('email', $user->email) }}" required
                   class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        </div>

        <label class="flex items-center gap-2 text-sm text-gray-700">
            <input type="hidden" name="is_admin" value="0">
            <input type="checkbox" name="is_admin" value="1"
                   class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                   {{ old('is_admin', $user->is_admin) ? 'checked' : '' }}
                   {{ $user->id === auth()->id() ? 'disabled' : '' }}>
            Admin access द्या
            @if ($user->id === auth()->id())
                <span class="text-xs text-gray-500">(तुम्ही स्वतःचा role बदलू शकत नाही)</span>
            @endif
        </label>

        <div class="flex gap-3 pt-2">
            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Update करा
            </button>
            <a href="{{ route('admin.users.index') }}" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm">
                रद्द करा
            </a>
        </div>
    </form>
@endsection
