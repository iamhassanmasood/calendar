import moment from "moment";
export const dateFormater = (date = new Date()) => {
  let format = `${moment(date).format("D")}. ${moment(date).format(
    "MMMM"
  )} ${moment(date).format("YYYY")}`;
  return format;
};
