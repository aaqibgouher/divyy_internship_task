<?php

namespace App\Http\Controllers\api;

use App\Utilities\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Utilities\ApiOutput;
use App\Services\DetailService;

class DetailController extends Controller
{
    public function detail(Request $request)
    {
        try{
            $data = [];
            $data = DetailService::get_details();

            return ApiOutput::success("successfully get the data.", $data);
        }catch(Exception $e) {
            return ApiOutput::error($e->getMessage());
        }
    }

    public function edit(Request $request)
    {
        try{
            $data = [];
            $id = Auth::id();
            $age = trim($request->input('age'));
            $gender = trim($request->input('gender'));
            $state = trim($request->input('state'));

            $data = DetailService::edit($id, [ "age" => $age, "gender" => $gender, "state" => $state ]);

            return ApiOutput::success("successfully updated the data.", $data);
        }catch(Exception $e) {
            return ApiOutput::error($e->getMessage());
        }
    }
}
