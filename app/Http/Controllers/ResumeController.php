<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ResumeController extends Controller
{
    public function index()
    {
        Log::info('Request started at: '.now());

        $resume = Cache::remember('resumeData', now()->addDay(), function () {
            Log::info('CACHE MISS - Reading from file at: '.now());

            $resumeData = Storage::get('resume.json');

            return json_decode($resumeData, true, 512, JSON_THROW_ON_ERROR);
        });

        Log::info('Cache data retrieved successfully');

        return Inertia::render('index', [
            'resumeData' => $resume,
        ]);
    }
}
