@extends('layouts.app')

@section('content')
    <h1>The services we provide are</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem voluptatibus excepturi pariatur ipsam voluptate, impedit ex alias! Optio, velit dolorem temporibus ipsa molestiae ipsum laudantium officiis expedita iste ullam.</p>

    <p class="text-danger">Welcome</p>
    
    <ul>
        @foreach ($services as $service)
            <li>{{ $service }}</li>
        @endforeach
    </ul>
@endsection