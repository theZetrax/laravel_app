@extends('layouts.app')

@section('content')
    @if (count($posts) > 0)
        @foreach ($posts as $post)
            <div class="card p-3 mb-1">
                <h3><a href="{{ route('posts.view', ['post' => $post->id]) }}">{{ $post->title }}</a></h3>
                <small>Written on {{ $post->created_at }}</small>
            </div>
        @endforeach

        {{ $posts->links() }}
    @else
        <p>No Posts Found</p>
    @endif
@endsection