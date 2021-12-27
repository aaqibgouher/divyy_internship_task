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

interface AuthInterface
{
    public static function login($email, $name);
    // public static function logout($user_id);
}

class AuthService implements AuthInterface
{
    /**
     * @param string $first_name
     * @param string $last_name
     * @param string $email
     * @param string $password
     * @return integer user id of created user
     */

    public static function login($email, $name)
    {
        $validator = Validator::make(compact("email", "name"), [
            "email" => Rule::get("email", true),
            "name" => Rule::get("name", true)
        ]);

        if ($validator->fails()) {
            throw new Exception($validator->errors()->first());
        }

        $user = UserService::get_by_email($email);
        // if (!$user) throw new Exception("Invalid Email");

        // if (!AuthService::check_password($password, $user->password)) throw new Exception("Invalid email and password");
        if(!$user) {
            $user_id = UserService::add($email, $name);
            $user = UserService::get_by_id($user_id);
        }

        $user_id = $user->id;
        $token = UserTokenService::generate_jwt_token($user_id);
        // UserTokenService::delete_expired_tokens($user_id);
        UserTokenService::insert_token_by_user_id($user_id, $token);
        UserService::edit($user_id, ["login_at" => Common::now()]);

        $data = [
            "id" => $user_id,
            "email" => $user->email,
            "name" => $user->name,
            "token" => $token
        ];
        return $data;
    }

    public static function logout($user_id)
    {
        $token = Auth::token();
        UserTokenService::delete_token_by_user_id($user_id, $token);
        session()->flush();
    }
}
