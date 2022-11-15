import React from "react";

import getDays from "../../../lib/utils/get-days";

import DayElement from "./dayElement";

type DayListProps = {
  weekNumber: number;
};

type Day = {
  name: string;
  date: string;
  unix: number;
};

const DayList = ({ weekNumber }: DayListProps) => {
  const weekDays = JSON.parse(getDays(weekNumber));

  return (
    <div>
      {weekDays.map((day: Day, i: number) => {
        return (
          <DayElement name={day.name} date={day.date} unix={day.unix} key={i} />
        );
      })}
    </div>
  );
};

export default DayList;
