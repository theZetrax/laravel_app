@extends('layouts.app')

@section('content')
    <h1>Edit Post</h1>
    {!! Form::open(['route' => ['posts.update', $post->id], 'method' => 'POST']) !!}
        <div class="form-group mb-1">
            {!! Form::label('title', 'Title') !!}
            {{ Form::text('title', $post->title, ['class' => 'form-control', 'placeholder' => 'Title']) }}
        </div>

        <div class="form-group mb-1">
            {!! Form::label('body', 'Body') !!}
            {!! Form::textarea('body', $post->body, ['id' => 'article-ckeditor', 'class' => 'form-control', 'placeholder' => 'Body']) !!}
        </div>

        {!! Form::hidden('_method', 'PUT') !!}
        {!! Form::submit('Update', ['class' => 'btn btn-primary text-white']) !!}
    {!! Form::close() !!}
@endsection