import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { verifyUser, logIn } from "../lib/utils/auth";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      const isLogged = await verifyUser();
      isLogged && router.push("/admin");
    })();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const data = await logIn(email, password);

    data.isAuth && router.push("/admin");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" ref={emailRef} placeholder="E-mail" />
        <input
          type="password"
          id="password"
          ref={passwordRef}
          placeholder="Heslo"
        />
        <button type="submit">Odoslať</button>
      </form>
    </>
  );
};

export default Login;
