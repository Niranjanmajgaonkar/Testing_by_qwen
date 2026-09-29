<!DOCTYPE html>
<html lang="mr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel') - My Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex">

    {{-- ===== Sidebar ===== --}}
    <aside class="w-64 bg-slate-900 text-white flex flex-col min-h-screen shrink-0">
        <div class="px-6 py-5 border-b border-slate-700">
            <h1 class="text-xl font-bold">⚙️ Admin Panel</h1>
            <p class="text-xs text-slate-400 mt-1">My Website</p>
        </div>

        <nav class="flex-1 px-3 py-4 space-y-1">
            <a href="{{ route('admin.dashboard') }}"
               class="block px-4 py-2 rounded-lg text-sm {{ request()->routeIs('admin.dashboard') ? 'bg-indigo-600' : 'hover:bg-slate-800' }}">
                📊 Dashboard
            </a>
            <a href="{{ route('admin.posts.index') }}"
               class="block px-4 py-2 rounded-lg text-sm {{ request()->routeIs('admin.posts.*') ? 'bg-indigo-600' : 'hover:bg-slate-800' }}">
                📝 Posts / Content
            </a>
            <a href="{{ route('admin.users.index') }}"
               class="block px-4 py-2 rounded-lg text-sm {{ request()->routeIs('admin.users.*') ? 'bg-indigo-600' : 'hover:bg-slate-800' }}">
                👥 Users
            </a>
            <a href="{{ url('/') }}" target="_blank"
               class="block px-4 py-2 rounded-lg text-sm hover:bg-slate-800">
                🌐 वेबसाइट पहा
            </a>
        </nav>

        <div class="px-6 py-4 border-t border-slate-700">
            <p class="text-sm font-medium truncate">{{ auth()->user()->name }}</p>
            <p class="text-xs text-slate-400 truncate mb-3">{{ auth()->user()->email }}</p>
            <form method="POST" action="{{ route('admin.logout') }}">
                @csrf
                <button type="submit" class="w-full text-left text-sm bg-slate-800 hover:bg-red-600 rounded-lg px-4 py-2 transition">
                    🚪 Logout
                </button>
            </form>
        </div>
    </aside>

    {{-- ===== Main content ===== --}}
    <main class="flex-1 p-8 overflow-auto">
        @if (session('success'))
            <div class="mb-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg text-sm">
                ✅ {{ session('success') }}
            </div>
        @endif

        @if (session('error'))
            <div class="mb-6 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg text-sm">
                ⚠️ {{ session('error') }}
            </div>
        @endif

        @if ($errors->any())
            <div class="mb-6 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg text-sm">
                <ul class="list-disc list-inside">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        @yield('content')
    </main>
</body>
</html>
