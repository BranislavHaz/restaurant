import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

import DayLabel from "./dayLabel";
import DayInputController from "./dayInputController";
import DayInput from "./dayInput";

type DayElementProps = {
  name: string;
  date: string;
  unix: number;
};

const DayElement = ({ name, date, unix }: DayElementProps) => {
  const stateMenu = useSelector((state: RootState) => state.menu);

  const prepareMenuArray = (type: string) =>
    stateMenu
      .filter((item) => item.unix === unix && item.type === type)
      .sort((prev, curr) => prev.order - curr.order);

  return (
    <div>
      <DayLabel name={name} date={date} />
      <h2>Polievky</h2>
      <>
        {prepareMenuArray("soup").map((item, i) => (
          <DayInput
            key={i}
            type={item.type}
            order={item.order}
            unix={item.unix}
            value={item.value}
          />
        ))}
      </>
      <h2>Hlavné jedlá</h2>
      {prepareMenuArray("main").map((item, i) => (
        <DayInput
          key={i}
          type={item.type}
          order={item.order}
          unix={item.unix}
          value={item.value}
        />
      ))}
      <DayInputController unix={unix} />
    </div>
  );
};

export default DayElement;
