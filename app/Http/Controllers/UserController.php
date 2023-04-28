<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $perPage = 10;
        $search = $request->input('search');

        $users = User::when($search, function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        })->paginate($perPage);

        $usersCount = User::count();
        Log::info("User count: " . $usersCount);

        return Inertia::render('UsersDashboard', [
            'users' => $users,
            'search' => $search,
            'usersCount' => $usersCount,
        ]);
    }


    public function destroy($id)
    {
        User::find($id)->delete();

        return redirect()->back();
    }
    public function dashboard()
    {
        $usersCount = User::count();
        Log::info("User count: " . $usersCount);

        return Inertia::render('Dashboard', [
            'usersCount' => $usersCount,
        ]);
    }
}



// failsolutioncontroller

// <?php

// namespace App\Http\Controllers;

// use App\Models\User;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class UserController extends Controller
// {
//     public function update(Request $request, $id)
//     {
//         $user = User::find($id);
//         $user->name = $request->input('name');
//         $user->email = $request->input('email');
//         $user->save();

//         return redirect()->back();
//     }

//     public function destroy($id)
//     {
//         User::find($id)->delete();

//         $users = User::all();

//         return Inertia::render('UserDashboard', ['users' => $users]);
//     }
// }
