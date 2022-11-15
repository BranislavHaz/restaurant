import moment from "moment";
import { NUMBER_OF_WEEKS } from "../constants";

export type Day = {
  name: String;
  date: String;
  unix: Number;
};

const getDays = (weekNumber: number) => {
  const nameOfDays = [
    "Pondelok",
    "Utorok",
    "Streda",
    "Štvrtok",
    "Piatok",
    "Sobota",
    "Nedeľa",
  ];

  let fullWeek: Day[] = [];
  let yearOfWeek: number;
  const currentYear = moment().year();

  moment().isoWeek() > weekNumber && weekNumber <= NUMBER_OF_WEEKS
    ? (yearOfWeek = currentYear + 1)
    : (yearOfWeek = currentYear);

  for (let i = 0; i < 7; i++) {
    const currentDay = moment()
      .year(yearOfWeek)
      .isoWeek(weekNumber)
      .startOf("isoWeek")
      .add(i, "day");
    const currentDayObj: Day = {
      name: nameOfDays[i],
      date: currentDay.format("DD.MM.YYYY"),
      unix: currentDay.unix(),
    };

    fullWeek.push(currentDayObj);
  }

  return JSON.stringify(fullWeek);
};

export default getDays;
