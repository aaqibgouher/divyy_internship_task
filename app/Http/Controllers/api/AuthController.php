<?php

namespace App\Http\Controllers\api;

use Exception;
use Illuminate\Http\Request;
use App\Utilities\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Services\AuthService;
use App\Utilities\ApiOutput;

class AuthController extends Controller
{
    public function __construct()
    {
        DB::beginTransaction();
    }

    public function login(Request $request)
    {
        try {
            $data = [];
            $email = trim($request->input('email'));
            $name = trim($request->input('name'));
            $data = AuthService::login($email, $name);

            DB::commit();
            return ApiOutput::success("successfully login", $data);
        } catch (Exception $e) {
            DB::rollBack();
            return ApiOutput::error($e->getMessage());
        }
    }

    public function logout(Request $request)
    {
        try{
            AuthService::logout(Auth::id());

            DB::commit();
            return ApiOutput::success("successfully logout");
        }catch(Exception $e) {
            DB::rollBack();
            return ApiOutput::error($e->getMessage());
        }
    }
}
