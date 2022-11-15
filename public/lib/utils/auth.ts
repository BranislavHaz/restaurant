import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";

export const verifyUser = async () => {
  const token = getCookie("jwt");
  let isLogged = false;

  if (token) {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/isAuth`,
      { withCredentials: true }
    );
    if (data.isAuth) {
      return (isLogged = true);
    } else {
      deleteCookie("jwt");
      return (isLogged = false);
    }
  } else {
    return (isLogged = false);
  }
};

export const logIn = async (email: any, password: any) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return data;
};

export const logOut = () => {
  deleteCookie("jwt");
};
