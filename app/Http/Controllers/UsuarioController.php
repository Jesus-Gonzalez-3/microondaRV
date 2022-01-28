<?php

namespace App\Http\Controllers;

use App\Models\UsuarioEloquent;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function login(Request $request)
    {
        try {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'estatus' => 'Activo'])) {
                return 'OK¬' . Auth::user()->name;
            } else {
                $user = UsuarioEloquent::where('email', '=', $request->email)->first();
                if (isset($user)) {
                    if ($user->estatus == "Activo") {
                        if ($user->email == $request->email) {
                            if ($user->password == Hash::make($request->password)) {
                            } else {
                                return 'Contraseña Incorrecta';
                            }
                        } else {
                            return 'Correo Incorrecto';
                        }
                    } else {
                        return 'El usuario se encuentra deshabilitado';
                    }
                } else {
                    return 'ERROR';
                }
            }
        } catch (Exception $ex) {
            return ['error' => $ex];
        }
    }

    public function registrar(Request $request)
    {
        try {
            $user = new UsuarioEloquent();
            $user->name = $request->nombre;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->rol = $request->rol;
            $user->save();
            return 'OK';
        } catch (Exception $ex) {
            return  $ex;
        }
    }

    public function logout()
    {
        try {
            Auth::logout();
            return redirect('/iniciarSesion');
        } catch (Exception $ex) {
            return view('error.pagenotfound');
        }
    }

    public function showlogin()
    {
        return view('login.login');
    }

    public function updateUser(Request $request)
    {
        try {
            $user = UsuarioEloquent::find($request->id);
            $user->avatar = $request->imagen;
            $user->save();
            return 'OK';
        } catch (Exception $ex) {
            return  $ex;
        }
    }

    public function updateDataUser(Request $request)
    {
        try {
            $muser = UsuarioEloquent::find($request->id);
            $muser->name = $request->nombre;
            $muser->email = $request->email;
            $muser->rol = $request->rol;
            if (isset($request->password)) {
                $muser->password = Hash::make($request->password);
            }
            $muser->save();
            return 'OK';
        } catch (Exception $ex) {
            return 'ERROR: ' . $ex;
        }
    }

    public function GetAll()
    {
        $usuarios = UsuarioEloquent::all()
            ->where('estatus', '=', 'Activo')
            ->where('rol', '!=', 'Admin')
            ->whereNotIn('name', [Auth::user()->name]);
        return view('users.users', compact('usuarios'));
    }

    public function GetAllInactivos()
    {
        $usuarios = UsuarioEloquent::all()
            ->where('estatus', '=', 'Inactivo')
            ->where('rol', '!=', 'Admin')
            ->whereNotIn('name', [Auth::user()->name]);
        return view('users.usersInactivos', compact('usuarios'));
    }

    public function Consultar(Request $request)
    {
        $mUser = UsuarioEloquent::find($request->id);
        return $mUser;
    }

    public function EliminarUser(Request $request)
    {
        try {
            $muser = UsuarioEloquent::find($request->id);
            $muser->estatus = 'Inactivo';
            $muser->save();
            return 'OK';
        } catch (Exception $ex) {
            return 'ERROR ' . $ex;
        }
    }
    public function ActivarUser(Request $request)
    {
        try {
            $muser = UsuarioEloquent::find($request->id);
            $muser->estatus = 'Activo';
            $muser->save();
            return 'OK';
        } catch (Exception $ex) {
            return 'ERROR ' . $ex;
        }
    }
}
