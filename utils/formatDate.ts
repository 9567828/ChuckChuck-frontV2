interface IFormat {
  date: Date;
  pattern: "yyyy-MM-dd" | "yyyy.MM.dd";
}

export const formatDateToString = ({ date, pattern }: IFormat) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const monthStr = String(month).padStart(2, "0");
  const dayStr = String(day).padStart(2, "0");

  if (pattern === "yyyy-MM-dd") {
    return `${year}-${monthStr}-${dayStr}`;
  }

  if (pattern === "yyyy.MM.dd") {
    return `${year}.${monthStr}.${dayStr}`;
  }
};
