import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

import WeekList from "../components/admin/week/weekList";
import DayList from "../components/admin/day/dayList";
import SaveMenu from "../components/admin/menu/saveMenu";

const Fake = () => {
  const { selectedWeek } = useSelector((state: RootState) => state.week);
  return (
    <div>
      <SaveMenu />
      <WeekList />
      <DayList weekNumber={selectedWeek} />
    </div>
  );
};

export default Fake;
