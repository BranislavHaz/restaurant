import getDays, { Day } from "./get-days";

const getRangeUnix = (weeks: number[]) => {
  const sortedWeeks = weeks.sort((a, b) => a - b);
  const minWeek = JSON.parse(getDays(sortedWeeks[0]));
  const maxWeek = JSON.parse(getDays(sortedWeeks[weeks.length - 1]));

  const minDay = minWeek.find((day: Day) => day.name === "Pondelok");
  const maxDay = maxWeek.find((day: Day) => day.name === "Nedeľa");

  return {
    min: minDay.unix,
    max: maxDay.unix,
  };
};

export default getRangeUnix;
