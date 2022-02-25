export const sizeConverter = (size: number): string => {
  if (size > 2 ** 40) {
    return (size / 2 ** 40).toFixed(2) + "TB";
  }
  if (size > 2 ** 30) {
    return (size / 2 ** 30).toFixed(2) + "GB";
  }
  if (size > 2 ** 20) {
    return (size / 2 ** 20).toFixed(2) + "MB";
  }
  if (size > 2 ** 10) {
    return (size / 2 ** 10).toFixed(2) + "KB";
  } else {
    return size + "B";
  }
};

export const DateConverter = (num: number): string => {
  const date = new Date(num * 1000);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let standard_hour = date.toString().slice(-13, -11);
  let standard_minutes = date.toString().slice(-11, -9);
  return (
    year +
    "년 " +
    month +
    "월 " +
    day +
    "일 " +
    hour +
    ":" +
    minutes +
    " +" +
    standard_hour +
    ":" +
    standard_minutes
  );
};

export const isValid = (num: number): boolean => {
  let Today: number = new Date().getTime();
  let ExpirationDate: number = (num + 3456000) * 1000;
  return ExpirationDate - Today > 0 ? true : false;
};

export const ExpirationPeriod = (num: number): string => {
  let Today: number = new Date().getTime();
  let ExpirationDate: number = (num + 3456000) * 1000;
  let Period = ExpirationDate - Today;
  if (Period > 172800000) {
    return Math.trunc(Period / (1000 * 24 * 3600)) + "일";
  }
  if (Period < 172800000 && Period > 0) {
    return (
      Math.trunc(Period / (1000 * 3600)) +
      "시간 " +
      (
        "0" +
        Math.trunc(
          Period / (1000 * 60) - Math.trunc(Period / (1000 * 3600)) * 60
        )
      ).slice(-2) +
      "분"
    );
  } else return "만료됨";
};
