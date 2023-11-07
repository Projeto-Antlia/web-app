"use server";

import { cookies } from "next/headers";

const HOUR = 60 * 60 * 1;

export const setCookie = (key: string, value: string) => {
  cookies().set({
    name: key,
    value,
    httpOnly: true,
    path: "/",
  });
};

export const getCookie = (key: string) => {
  let value = cookies().get(key)?.value;
  return value;
};

export const destroyCookie = (key: string) => {
  cookies().delete(key);
};
