import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../week/weekSlice";

type WeekPickerProps = {
  weekNumber: number;
};

const WeekPicker = ({ weekNumber }: WeekPickerProps) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(add({ selectedWeek: weekNumber }));
  };

  return (
    <div>
      <a href="" onClick={handleClick}>
        {weekNumber}
      </a>
    </div>
  );
};

export default WeekPicker;
