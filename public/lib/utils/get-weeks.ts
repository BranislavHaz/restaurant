import moment from "moment";
import { NUMBER_OF_WEEKS } from "../constants";

const getWeeks = () => {
  let listOfWeeks: number[] = [];

  (() => {
    for (let i = NUMBER_OF_WEEKS; i >= -NUMBER_OF_WEEKS; i--) {
      const week = moment()
        .subtract(7 * i, "days")
        .isoWeek();

      listOfWeeks.push(week);
    }
  })();

  return listOfWeeks;
};

export default getWeeks;
