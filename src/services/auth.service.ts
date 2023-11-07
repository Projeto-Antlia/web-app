"use server";

import { redirect } from "next/navigation";
import api from "./api";
import { destroySession, saveSession } from "./session.service";

interface SignInRequestData {
  username: string;
  password: string;
}

interface SignInResponseData {
  access_token: string;
}

export async function signIn(
  payload: SignInRequestData
): Promise<SignInResponseData | void> {
  return api.post("auth/login", payload).then(({ data }) => {
    saveSession(data.access_token);
    return data;
  });
}

export const logout = async () => {
  destroySession();
  redirectToLogin();
};

const redirectToLogin = () => {
  redirect("/login");
};
