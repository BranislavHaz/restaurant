import React from "react";

type DayLabelProps = {
  name: string;
  date: string;
};

const DayLabel = ({ name, date }: DayLabelProps) => {
  return (
    <div>
      <div>{name}</div>
      <div>{date}</div>
    </div>
  );
};

export default DayLabel;
