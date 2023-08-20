export const regexEmail =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,})|([0-9]{1}[-0-9.]{1,}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
export const regexPassword = /^[^\s]+$/;
export const regexName = /^[A-Za-zА-Яа-яЁё-\s]+$/;
export const regexSurname = /^[A-Za-zА-Яа-яЁё-\s]+$/;
export const regexUrl =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
export const regexDoubleSpace = /\s{2,}/;
