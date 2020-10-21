<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function Index()
    {
        $data = [ 'data' => 'This is data' ];
        return view('pages.index', $data);
    }

    public function About()
    {
        return view('pages.about');
    }

    public function Services()
    {
        $services = [
            'Service One',
            'Service Two',
            'Service Three'
        ];

        return view('pages.services', [ 'services' => $services ]);
    }
}
