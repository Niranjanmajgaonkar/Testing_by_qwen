<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class UserController extends Controller
{
    public function index(Request $request): View
    {
        $query = User::latest();

        if ($search = $request->query('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        return view('admin.users.index', [
            'users' => $query->paginate(10)->withQueryString(),
            'search' => $search,
        ]);
    }

    public function edit(User $user): View
    {
        return view('admin.users.form', compact('user'));
    }

    public function update(Request $request, User $user): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'is_admin' => ['boolean'],
        ]);

        $data['is_admin'] = $request->boolean('is_admin');

        // Don't let an admin demote themselves (lock-out protection)
        if ($user->id === $request->user()->id) {
            $data['is_admin'] = true;
        }

        $user->update($data);

        return redirect()->route('admin.users.index')->with('success', 'User अपडेट झाला!');
    }

    public function destroy(Request $request, User $user): RedirectResponse
    {
        if ($user->id === $request->user()->id) {
            return back()->with('error', 'तुम्ही तुमचा स्वतःचा account delete करू शकत नाही.');
        }

        $user->delete();

        return redirect()->route('admin.users.index')->with('success', 'User delete झाला!');
    }
}
