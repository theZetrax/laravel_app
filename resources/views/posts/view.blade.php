@extends('layouts.app')

@section('content')
    <a href="{{ route('posts.index') }}" class="btn btn-info text-white mb-3">Go Back</a>
    <h1>{{ $post->title }}</h1>
    <small>{{ $post->created_at }}</small>
    <p>{{ $post->body }}</p>
    <div>
        @auth
            {!! Form::open(['route' => ['posts.destroy', $post->id], 'method' => 'POST']) !!}
                {!! Form::hidden('_method', 'DELETE') !!}
                <a href="{{ route('posts.edit', [$post->id]) }}" class="btn btn-success text-white">Edit</a>
                {!! Form::submit('Delete', ['class' => 'btn btn-danger text-white']) !!}
            {!! Form::close() !!}
        @endauth
    </div>
@endsection