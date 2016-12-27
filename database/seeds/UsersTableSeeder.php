<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'userName' => 'admin',
            'password' => \Illuminate\Support\Facades\Hash::make('admin'),
        ]);
    }
}
