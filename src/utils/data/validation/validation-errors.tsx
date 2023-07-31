export const validationErrors = Object.freeze({
  user: {
    email: {
      acceptableSymbols:
        'Поле может содержать только прописные и строчные буквы (A-z), цифры, точку, дефис, @, нижнее подчеркивание',
      unacceptableLength: 'Недопустимая длина',
      duplicate: 'Пользователь с таким email уже зарегистрирован',
      required: 'Обязательное поле',
    },

    password: {
      unacceptableLength: 'Пароль должен содержать 6–20 символов',
      wrong:
        'Неверный пароль. Повторите попытку или нажмите на ссылку «Забыли пароль?», чтобы восстановить его',
      confirmation: 'Пароли должны совпадать',
      required: 'Обязательное поле',
    },

    name: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      unacceptableLength: 'Имя может содержать 1-50 символов',
      required: 'Обязательное поле',
    },

    surname: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      unacceptableLength: 'Фамилия может содержать 1-50 символов',
      required: 'Обязательное поле',
    },
  },
});
