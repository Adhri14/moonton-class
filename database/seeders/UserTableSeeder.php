<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            "name" => "Admin Moonton",
            "email" => "admin@moonton.test",
            "password" => bcrypt('password140501'),
        ]);
        $admin->assignRole("admin");
    }
}
