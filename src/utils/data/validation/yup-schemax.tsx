import { regexEmail, regexName, regexSurname } from 'utils/regex';
import { validationErrors } from './validation-errors';

export const schemaEmail = (yup: any) => ({
  email: yup
    .string()
    .matches(regexEmail, validationErrors.user.email.acceptableSymbols)
    .required(validationErrors.user.email.required),
});

export const schemaPassword = (yup: any) => ({
  password: yup
    .string()
    .min(6, validationErrors.user.password.unacceptableLength)
    .max(20, validationErrors.user.password.unacceptableLength)
    .required(validationErrors.user.password.required),
});

export const schemaName = (yup: any) => ({
  name: yup
    .string()
    .matches(regexName, validationErrors.user.name.unacceptableSymbols)
    .min(1, validationErrors.user.name.unacceptableLength)
    .max(50, validationErrors.user.name.unacceptableLength)
    .required(validationErrors.user.name.required),
});

export const schemaSurname = (yup: any) => ({
  name: yup
    .string()
    .matches(regexSurname, validationErrors.user.surname.unacceptableSymbols)
    .min(1, validationErrors.user.surname.unacceptableLength)
    .max(50, validationErrors.user.surname.unacceptableLength)
    .required(validationErrors.user.surname.required),
});

export const schemaPersonalDataConsent = (yup: any) => ({
  is_agreed: yup.bool().required().oneOf([true]),
});
