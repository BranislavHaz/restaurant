import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store";

import { removeAll } from "./menuSlice";

const SaveMenu = () => {
  const router = useRouter();
  const stateMenu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/menu/add`, stateMenu, {
        withCredentials: true,
      })
      .then(() => dispatch(removeAll()))
      .catch(() => router.push("/login"));
  };
  return <button onClick={handleClick}>SaveMenu</button>;
};

export default SaveMenu;
