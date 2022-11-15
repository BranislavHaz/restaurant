import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { add, addAll, MenuInputsState } from "../menu/menuSlice";
import { useGetMenuRangeQuery } from "../menu/menuApi";
import getWeeks from "../../../lib/utils/get-weeks";
import getRangeUnix from "../../../lib/utils/get-rangeUnix";

import WeekPicker from "./weekPicker";

const WeekList = () => {
  const dispatch = useDispatch();
  const weeks = getWeeks();
  const rangeValuesObj = getRangeUnix(weeks);
  const { data } = useGetMenuRangeQuery(rangeValuesObj);

  useEffect(() => {
    data && dispatch(addAll(data));
  }, [data]);

  return (
    <>
      {weeks.map((week, i) => (
        <WeekPicker key={i} weekNumber={week} />
      ))}
    </>
  );
};

export default WeekList;
