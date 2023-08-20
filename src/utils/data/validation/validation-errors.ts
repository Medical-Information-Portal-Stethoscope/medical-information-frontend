export const validationErrors = Object.freeze({
  user: {
    email: {
      acceptableSymbols:
        'Поле может содержать только прописные и строчные буквы (A-z), цифры, точку, дефис, @, нижнее подчеркивание, максимум 50 символов',
      longLength: 'Недопустимая длина, максимум 50 символов',
      noSymbols: 'Email не указан',
      required: 'Поле обязательно к заполнению',
    },

    password: {
      shortLength:
        'Недостаточная длина пароля. Пароль должен содержать 6-20 символов',
      longLength: 'Превышена допустимая длина пароля, максимум 20 символов',
      confirmation: 'Пароли должны совпадать',
      required:
        'Поле обязательно к заполнению, минимум 6 и максимум 20 символов, кроме пробелов',
    },

    name: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      longLength: 'Недопустимая длина, максимум 50 символов',
      required: 'Поле обязательно к заполнению, минимум 1 символ',
    },

    surname: {
      unacceptableSymbols: 'Поле не должно содержать символы % ; . * ^ ) _ @ !',
      longLength: 'Недопустимая длина, максимум 50 символов',
      required: 'Поле обязательно к заполнению, минимум 1 символ',
    },
  },

  articles: {
    title: {
      unacceptableLength: 'Недопустимая длина',
      required: 'Обязательное поле',
    },

    annotation: {
      unacceptableLength: 'Недопустимая длина',
      required: 'Обязательное поле',
    },

    text: {
      required: 'Обязательное поле',
    },

    sourceName: {
      unacceptableLength: 'Недопустимая длина',
    },

    sourceLink: {
      unacceptableLength: 'Недопустимая длина',
      unacceptableType: 'Введите URL',
    },

    image: {
      unacceptableSize:
        'Размер загружаемой фотографии не должен превышать 1,5 Мб',
      required: 'Обязательное поле',
    },
  },

  comment: {
    required: 'Обязательное поле',
    unacceptableLength: 'Недопустимая длина',
  },
});
