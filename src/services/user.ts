/**
 *   Project: lifeplanner-webapp
 *   File: user
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */

import type { User } from '@/interface';
import useAuth from '@/utils/hooks/use-auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import client from './client';
import { API_ENDPOINTS } from './client/endpoints';
import toast from "react-hot-toast";

export function useMe() {
    const { isAuthorized } = useAuth();
    const { data, isLoading, error } = useQuery<User, Error>(
        [API_ENDPOINTS.USERS_ME],
        client.users.me,
        {
            enabled: isAuthorized,
        }
    );
    return {
        me: data,
        isLoading,
        error,
        isAuthorized,
    };
}

export function useLogout() {
    const { unauthorize } = useAuth();
    const queryClient = useQueryClient();
    return useMutation(client.users.logout, {
        onSuccess: () => {
            unauthorize();
            queryClient.resetQueries([API_ENDPOINTS.USERS_ME]);
        },
    });
}


