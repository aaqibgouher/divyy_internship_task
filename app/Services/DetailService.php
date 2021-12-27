<?php

namespace App\Services;

use Exception;
use Validator;
use App\Utilities\Auth;
use App\Utilities\Rule;
use App\Utilities\Common;
use Illuminate\Support\Facades\Hash;
use App\Services\UserService;
use App\Services\UserTokenService;
use App\Models\UserModel;

interface DetailInterface
{
    public static function get_details();
    public static function edit($id, $params = []);
    // public static function logout($user_id);
}

class DetailService implements DetailInterface
{
    public static function get_details()
    {
        $data = [];

        $user = Auth::user();

        $data = [
            "id" => $user->id,
            "email" => $user->email,
            "name" => $user->name,
            "age" => $user->age,
            "gender" => $user->gender,
            "state" => $user->state
        ];

        return $data;
    }

    public static function edit($id, $params = [])
    {
        $validator = Validator::make($params, [
            "age" => Rule::get("name"),
            "gender" => Rule::get('name'),
            "state" => Rule::get('name'),
        ]);

        if ($validator->fails()) {
            throw new Exception($validator->errors()->first());
        }

        // user_params
        $detail_params = [];
        if ($params && array_key_exists("age", $params)) $detail_params["age"] = $params["age"] ? $params["age"] : 0;
        if ($params && array_key_exists("gender", $params)) $detail_params["gender"] = $params["gender"] ? $params["gender"] : 2;
        if ($params && array_key_exists("state", $params)) $detail_params["state"] = $params["state"];
        $detail_params['updated_at'] = Common::now();

        UserModel::where('id', $id)->update($detail_params);

        $data = UserService::get_by_id($id);

        return $data;
    }

}
