@extends('layouts.app')

@section('content')
    <h1>{{ $post->title }}</h1>
    <small>{{ $post->created_at }}</small>
    <p>{{ $post->body }}</p>
    <div>
        {!! Form::open(['route' => ['posts.destroy', $post->id], 'method' => 'POST']) !!}
            {!! Form::hidden('_method', 'DELETE') !!}
            <a href="{{ route('posts.edit', [$post->id]) }}" class="btn btn-primary text-white">Edit</a>
            {!! Form::submit('Delete', ['class' => 'btn btn-danger text-white']) !!}
            <a href="{{ route('posts.index') }}" class="btn btn-primary-outline text-dark">Cancel</a>
        {!! Form::close() !!}
    </div>
@endsection