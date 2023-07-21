export const getDatetimeData = (): string[] => {
  const now = new Date();

  const date = `${now.getDay() < 9 ? `0${now.getDay()}` : now.getDay()}.${
    now.getMonth() < 9 ? `0${now.getMonth()}` : now.getMonth()
  }.${now.getFullYear()}`;

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return [date, time];
};
