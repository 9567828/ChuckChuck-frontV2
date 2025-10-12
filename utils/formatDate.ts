interface IFormat {
  date: Date;
  pattern: "yyyy-MM-dd" | "yyyy.MM.dd" | "yMd(a)";
}

export const makeTwoDigit = (num: number) => {
  return String(num).padStart(2, "0");
};

export const formatDateToString = (date: Date, pattern: "yyyy-MM-dd" | "yyyy.MM.dd" | "yMd(a)") => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const aa = date.getDay();

  const dayAttr = ["일", "월", "화", "수", "목", "금", "토"];

  const monthStr = makeTwoDigit(month);
  const dayStr = makeTwoDigit(day);

  if (pattern === "yyyy-MM-dd") {
    return `${year}-${monthStr}-${dayStr}`;
  }

  if (pattern === "yyyy.MM.dd") {
    return `${year}.${monthStr}.${dayStr}`;
  }

  if (pattern === "yMd(a)") {
    return `${year}년 ${monthStr}월 ${dayStr}일(${dayAttr[aa]})`;
  }
};

export const formatTimeToString = (date: Date, pattern: "hh:ss:ss" | "hss") => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourStr = makeTwoDigit(hours);
  const minStr = makeTwoDigit(minutes);
  const secStr = makeTwoDigit(seconds);

  if (pattern === "hh:ss:ss") {
    return `${hourStr}:${minStr}:${secStr}`;
  }

  if (pattern === "hss") {
    return parseInt(`${hourStr}${minStr}${secStr}`);
  }
};

export const formatGetHour = (time: string) => {
  if (time) {
    const hour = time.slice(0, 2);
    return parseInt(hour);
  } else {
    return null;
  }
};
