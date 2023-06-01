import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import HTTPUtil from "@/utils/http/http.util";
import { usePersistedStore } from "@/store";
import type { AuthData } from "./auth.api.types";
import type { UserDataSlice as UserData } from "@/store/slices/persisted/auth.slice";
export const useLogin  = () => {
  return useMutation<UserData, any, any>(async ({ email, password }: AuthData) => await HTTPUtil.post('/auth/login', { email, password }));
}

export const useSignup  = () => {
  return useMutation(async ({ email, password }: AuthData) => await HTTPUtil.post('/auth/signup', { email, password }));
}

export const useLogout  = () => {
  return useMutation('/auth/logout', async () => await HTTPUtil.get('/auth/logout'));
}

export const useAuth  = () => {
  const { isSuccess, isError, data: userData } = useQuery<UserData>('auth', async () => await HTTPUtil.get('/auth'), { cacheTime: 0 });
  useEffect (() => {
    if (isSuccess) {
      usePersistedStore.setState((state: any) => ({ ...state, userData }));
    }
  }, [isSuccess])
  return ({ isSuccess, isError, data: userData });

}

