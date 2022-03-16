import moment from "moment";
export const selectedDateFormat = (date) => {
  let format = `${moment(date).format("D")}. ${moment(date).format(
    "MMMM"
  )} ${moment(date).format("YYYY")}`;
  return format;
};

export const currentDateFormat = () => {
  let date = new Date();
  let currentDate = `${moment(date).format("D")}. ${moment(date).format(
    "MMMM"
  )} ${moment(date).format("YYYY")}`;
  return currentDate;
};
