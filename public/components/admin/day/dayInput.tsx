import React from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../menu/menuSlice";

type DayInputProps = {
  type: string;
  order: number;
  unix: number;
  value?: string;
};

const DayInput = ({ type, order, unix, value }: DayInputProps) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = {
      unix,
      type,
      order,
      value: e.target.value,
    };

    dispatch(edit(inputData));
  };

  const handleClick = () => {
    dispatch(remove({ type, order, unix }));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
      <span onClick={handleClick}>X</span>
    </div>
  );
};

export default DayInput;
