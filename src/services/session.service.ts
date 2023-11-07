import { destroyCookie, getCookie, setCookie } from "./cookie.service";

const NAME_COOKIE = "next.antlia";

export const saveSession = (token: string) => {
  setCookie(NAME_COOKIE, JSON.stringify({ token }));
};

export type Session = { token: string } | undefined;

export const getSession = async (): Promise<Session> => {
  try {
    const session = await getCookie(NAME_COOKIE);
    if (session) return JSON.parse(session);
  } catch (err) {
    return;
  }
};

export const destroySession = () => {
  destroyCookie(NAME_COOKIE);
};
