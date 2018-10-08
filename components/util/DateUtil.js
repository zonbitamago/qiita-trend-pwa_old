import moment from "moment";

export const momentJA = () => {
  return moment()
    .utc()
    .add(9, "hours");
};

export const oneDayAgo = momentJA()
  .subtract(1, "days")
  .format("YYYY-MM-DD");
export const twoDaysAgo = momentJA()
  .subtract(2, "days")
  .format("YYYY-MM-DD");
export const oneWeekAgo = momentJA()
  .subtract(7, "days")
  .format("YYYY-MM-DD");
