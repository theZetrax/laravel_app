<nav aria-label="paginator">
    <ul class="pagination">
        <li class="page-item {{ $paginator->onFirstPage() ? "disabled" : "" }}">
            <a class="page-link" href="{{ $paginator->previousPageUrl() . "&orderBy=$orderBy&order=$order" }}" tabindex="-1">Previous</a>
        </li>
        
        @for ($i = 1; $i <= $paginator->lastPage(); $i++)  
            <li class="page-item {{ ($paginator->currentPage() === $i) ? "active" : "" }}"><a class="page-link" href="{{ $paginator->url($i) . "&orderBy=$orderBy&order=$order" }}">{{ $i }}</a></li>
        @endfor

        <li class="page-item {{ ($paginator->currentPage() === $paginator->lastPage()) ? "disabled" : "" }}">
            <a class="page-link" href="{{ $paginator->nextPageUrl() . "&orderBy=$orderBy&order=$order" }}">Next</a>
        </li>
    </ul>
</nav>
