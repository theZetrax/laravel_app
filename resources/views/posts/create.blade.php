@extends('layouts.app')

@section('content')
    <h1>Create Post</h1>
    {!! Form::open(['route' => 'posts.store', 'method' => 'POST']) !!}
        <div class="form-group mb-1">
            {!! Form::label('title', 'Title') !!}
            {{ Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'Title']) }}
        </div>

        <div class="form-group mb-1">
            {!! Form::label('body', 'Body') !!}
            {!! Form::textarea('body', '', ['id' => 'article-ckeditor', 'class' => 'form-control', 'placeholder' => 'Body']) !!}
        </div>

        {!! Form::submit('Create', ['class' => 'btn btn-primary text-white']) !!}
    {!! Form::close() !!}
@endsection