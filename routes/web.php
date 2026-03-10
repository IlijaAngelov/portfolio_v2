<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/', function () {
    $resumeData = [];
    try {
        if (Storage::exists('resume.json')) {
            $json = Storage::get('resume.json');
            $resumeData = json_decode($json, true, 512, JSON_THROW_ON_ERROR) ?: [];
        }
    } catch (\Throwable $e) {
        $resumeData = [];
    }

    return Inertia::render('index', [
        'resumeData' => $resumeData,
    ]);
})->name('home');
