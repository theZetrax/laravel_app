@extends('layouts.app')

@section('content')
    <ul class="nav nav-pills mb-2">
        <li class="nav-item">
            <a class="nav-link" href="{{ route('posts.create') }}">Create Post</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">Options</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="?orderBy=created_at&order=asc">Order By Date (Ascending)</a>
                <a class="dropdown-item" href="?orderBy=created_at">Order By Date (Descending)</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="?orderBy=title&order=asc">Order By Title (Asccending)</a>
                <a class="dropdown-item" href="?orderBy=title">Order By Title (Descending)</a>
            </div>
        </li>
    </ul>

    @if(count($posts) > 0)
        @foreach($posts as $post)
            <div class="card p-3 mb-1">
                <h3><a
                        href="{{ route('posts.view', ['post' => $post->id]) }}">{{ $post->title }}</a>
                </h3>
                <small>Written on {{ $post->created_at }}</small>
            </div>
        @endforeach

        {{ $posts->links('paginator.default', ['orderBy' => $orderBy, 'order' => $order]) }}
    @else
        <p>No Posts Found</p>
    @endif
@endsection
