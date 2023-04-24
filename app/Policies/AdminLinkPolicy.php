<?php

namespace App\Policies;

use App\Models\User;

class AdminLinkPolicy
{
    /**
     * Create a new policy instance.
     */
    public function viewAdminLink(User $user)
    {
        return $user->hasRole('admin');
    }
}
