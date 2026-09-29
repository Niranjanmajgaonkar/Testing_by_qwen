<!DOCTYPE html>
<html lang="mr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-md">
        <div class="text-center mb-6">
            <h1 class="text-3xl font-bold text-white">⚙️ Admin Panel</h1>
            <p class="text-slate-400 text-sm mt-1">Login करा चालू ठेवण्यासाठी</p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
            @if ($errors->any())
                <div class="mb-5 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {{ $errors->first() }}
                </div>
            @endif

            <form method="POST" action="{{ route('admin.login.attempt') }}" class="space-y-5">
                @csrf

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" value="{{ old('email') }}" required autofocus
                           class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           placeholder="admin@example.com">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" name="password" required
                           class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           placeholder="••••••••">
                </div>

                <label class="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="remember" value="1" class="rounded border-gray-300 text-indigo-600">
                    मला लक्षात ठेवा (Remember me)
                </label>

                <button type="submit"
                        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition">
                    Login
                </button>
            </form>
        </div>

        <p class="text-center text-slate-500 text-xs mt-6">
            फक्त admin users लाच login करण्याची परवानगी आहे.
        </p>
    </div>
</body>
</html>
