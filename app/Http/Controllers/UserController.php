<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Lendee;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index ()
    {
        $users = User::get(['id', 'name']);

        return inertia('Users/Index', [
            'users' => $users
        ]);
    }

    public function show (User $user)
    {
        return inertia('Users/Show', [
            'user' => $user
        ]);
    }

    public function store (Lendee $lendee)
    {
        $id = 1000000 + $lendee->id;
        $pw = Str::random(8);

        $user = new User;

        $user->name = $id;
        $user->password = Hash::make($pw);

        $user->save();

        return redirect()->back();
    }
}
