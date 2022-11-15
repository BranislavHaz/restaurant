import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../menu/menuSlice";

type DayInputControllerProps = {
  unix: number;
};

const DayInputController = ({ unix }: DayInputControllerProps) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const type = (e.target as HTMLButtonElement).name;

    if (type === "add-soup") {
      dispatch(add({ unix, type: "soup" }));
    } else {
      dispatch(add({ unix, type: "main" }));
    }
  };

  return (
    <>
      <button name="add-soup" onClick={handleClick}>
        Pridať polievku
      </button>
      <button name="add-main" onClick={handleClick}>
        Pridať hlavné jedlo
      </button>
    </>
  );
};

export default DayInputController;
