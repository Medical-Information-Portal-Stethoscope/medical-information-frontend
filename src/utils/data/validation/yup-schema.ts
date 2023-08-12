import { regexEmail, regexName, regexSurname, regexUrl } from 'utils/regex';
import { validationErrors } from './validation-errors';

// USER
export const schemaEmail = (yup: typeof import('yup')) => ({
  email: yup
    .string()
    .defined()
    .max(50, validationErrors.user.email.unacceptableLength)
    .matches(regexEmail, validationErrors.user.email.acceptableSymbols)
    .required(validationErrors.user.email.required),
});

export const schemaPassword = (yup: typeof import('yup')) => ({
  password: yup
    .string()
    .defined()
    .min(6, validationErrors.user.password.unacceptableLength)
    .max(20, validationErrors.user.password.unacceptableLength)
    .required(validationErrors.user.password.required),
});

export const schemaPasswordConfirmation = (yup: typeof import('yup')) => ({
  password_confirmation: yup
    .string()
    .defined()
    .min(6, validationErrors.user.password.unacceptableLength)
    .max(20, validationErrors.user.password.unacceptableLength)
    .oneOf([yup.ref('password')], validationErrors.user.password.confirmation)
    .required(validationErrors.user.password.required),
});

export const schemaName = (yup: typeof import('yup')) => ({
  first_name: yup
    .string()
    .defined()
    .matches(regexName, validationErrors.user.name.unacceptableSymbols)
    .min(1, validationErrors.user.name.unacceptableLength)
    .max(50, validationErrors.user.name.unacceptableLength)
    .required(validationErrors.user.name.required),
});

export const schemaLastname = (yup: typeof import('yup')) => ({
  last_name: yup
    .string()
    .defined()
    .matches(regexSurname, validationErrors.user.surname.unacceptableSymbols)
    .min(1, validationErrors.user.surname.unacceptableLength)
    .max(50, validationErrors.user.surname.unacceptableLength)
    .required(validationErrors.user.surname.required),
});

export const schemaPersonalDataConsent = (yup: typeof import('yup')) => ({
  personal_data_confirmation_has_agreed: yup
    .bool()
    .default(true)
    .required()
    .oneOf([true]),
});

// ARTICLES
export const schemaArticleTitle = (yup: typeof import('yup')) => ({
  title: yup
    .string()
    .defined()
    .max(255, validationErrors.articles.title.unacceptableLength)
    .required(validationErrors.articles.title.required),
});

export const schemaArticleAnnotation = (yup: typeof import('yup')) => ({
  annotation: yup
    .string()
    .defined()
    .max(400, validationErrors.articles.annotation.unacceptableLength)
    .required(validationErrors.articles.annotation.required),
});

export const schemaArticleText = (yup: typeof import('yup')) => ({
  text: yup
    .string()
    .defined()
    .required(validationErrors.articles.text.required),
});

export const schemaArticleSourceName = (yup: typeof import('yup')) => ({
  source_name: yup
    .string()
    .max(255, validationErrors.articles.sourceName.unacceptableLength),
});

export const schemaArticleSourceLink = (yup: typeof import('yup')) => ({
  source_link: yup
    .string()
    .matches(regexUrl, validationErrors.articles.sourceLink.unacceptableType)
    .max(2047, validationErrors.articles.sourceLink.unacceptableLength),
});

export const schemaArticleImage = (yup: typeof import('yup')) => ({
  image: yup.string().required(),
});
