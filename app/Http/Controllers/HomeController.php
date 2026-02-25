<?php

namespace App\Http\Controllers;

use App\Services\HomeService;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    /**
     * Get Home Page
     * @param HomeService $homeService
     * @return View
     */
    public function homePage(HomeService $homeService): View
    {
        $data = $homeService->getHomePageData();

        return view('home', $data);
    }

    /**
     * Get Settings Page
     * @return View
     */
    public function settingsPage(): View
    {
        return view('settings');
    }
}
