<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ResumeController extends Controller
{
    public function index()
    {

        $resume = Cache::remember('resumeData', now()->addDay(), function () {
            $resumeData = Storage::get('resume.json');

            return json_decode($resumeData, true, 512, JSON_THROW_ON_ERROR);
        });

        return Inertia::render('index', [
            'resumeData' => $resume,
        ]);
    }
}
