<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminPanelSeeder extends Seeder
{
    /**
     * Run the seeders for the admin panel demo.
     */
    public function run(): void
    {
        // Default admin account — बदलला की चालेल, पण first login साठी हे वापरा
        $admin = User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('password'),
                'is_admin' => true,
            ]
        );

        // Demo regular user
        User::updateOrCreate(
            ['email' => 'user@example.com'],
            [
                'name' => 'Sample User',
                'password' => Hash::make('password'),
                'is_admin' => false,
            ]
        );

        // Sample posts
        if (Post::count() === 0) {
            Post::create([
                'title' => 'पहिली Post',
                'content' => 'ही demo post admin panel मधून तयार केली आहे.',
                'is_published' => true,
                'user_id' => $admin->id,
            ]);

            Post::create([
                'title' => 'Draft Post',
                'content' => 'ही अजून publish केलेली नाही.',
                'is_published' => false,
                'user_id' => $admin->id,
            ]);
        }
    }
}
