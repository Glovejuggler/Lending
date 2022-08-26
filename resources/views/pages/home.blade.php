@extends('layouts.master')

@section('content')
<div class="max-w-screen-2xl px-7 mx-auto">
    <!-- Header -->
    <div class="bg-white h-16 flex justify-between place-items-center">
        <div>
            Home
        </div>
        <div>
            <a href="{{ route('login') }}"
                class="font-bold border-2 border-black rounded-lg p-3 hover:bg-black hover:text-white">Login</a>
        </div>
    </div>
</div>
@endsection