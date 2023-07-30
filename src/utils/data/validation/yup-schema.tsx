import { regexEmail, regexName, regexSurname } from 'utils/regex';
import { validationErrors } from './validation-errors';

export const schemaEmail = (yup: any) => ({
  email: yup
    .string()
    .defined()
    .max(50, validationErrors.user.email.unacceptableLength)
    .matches(regexEmail, validationErrors.user.email.acceptableSymbols)
    .required(validationErrors.user.email.required),
});

export const schemaPassword = (yup: any) => ({
  password: yup
    .string()
    .defined()
    .min(6, validationErrors.user.password.unacceptableLength)
    .max(20, validationErrors.user.password.unacceptableLength)
    .required(validationErrors.user.password.required),
});

export const schemaPasswordConfirmation = (yup: any) => ({
  password_confirmation: yup
    .string()
    .defined()
    .min(6, validationErrors.user.password.unacceptableLength)
    .max(20, validationErrors.user.password.unacceptableLength)
    .oneOf([yup.ref('password')], validationErrors.user.password.confirmation)
    .required(validationErrors.user.password.required),
});

export const schemaName = (yup: any) => ({
  first_name: yup
    .string()
    .defined()
    .matches(regexName, validationErrors.user.name.unacceptableSymbols)
    .min(1, validationErrors.user.name.unacceptableLength)
    .max(50, validationErrors.user.name.unacceptableLength)
    .required(validationErrors.user.name.required),
});

export const schemaLastname = (yup: any) => ({
  last_name: yup
    .string()
    .defined()
    .matches(regexSurname, validationErrors.user.surname.unacceptableSymbols)
    .min(1, validationErrors.user.surname.unacceptableLength)
    .max(50, validationErrors.user.surname.unacceptableLength)
    .required(validationErrors.user.surname.required),
});

export const schemaPersonalDataConsent = (yup: any) => ({
  personal_data_confirmation_has_agreed: yup
    .bool()
    .default(true)
    .required()
    .oneOf([true]),
});
