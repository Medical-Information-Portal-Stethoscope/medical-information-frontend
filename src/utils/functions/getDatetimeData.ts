export const getDatetimeData = (): string[] => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const date = `${currentDay < 9 ? `0${currentDay}` : currentDay}.${
    currentMonth < 9 ? `0${currentMonth}` : currentMonth
  }.${currentYear}`;

  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return [date, time];
};
