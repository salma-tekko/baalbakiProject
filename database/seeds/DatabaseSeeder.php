<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call('UserTableSeeder');
        $this->command->info('User table seeded!');

    }




}


class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->insert([
            'userName' => 'admin',
            'password' => \Illuminate\Support\Facades\Hash::make('admin'),
        ]);
    }

}

