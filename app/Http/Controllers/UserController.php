<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

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
}
