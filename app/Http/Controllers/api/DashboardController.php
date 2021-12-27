<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Utilities\ApiOutput;

class DashboardController extends Controller
{
    public function dashboard(Request $request)
    {
        try{
            return ApiOutput::success("welcome in dashboard");
        }catch(Exception $e) {
            return ApiOutput::error($e->getMessage());
        }
    }
}
