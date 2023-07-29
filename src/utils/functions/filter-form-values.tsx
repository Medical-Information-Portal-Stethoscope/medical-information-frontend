import { regexDoubleSpace } from 'utils/regex';

export interface IFormValues {
  [key: string]: string;
}

export const filterFormValues = (values: IFormValues) => {
  const copyValues = { ...values };

  Object.keys(copyValues).map((key) => {
    if (typeof copyValues[key] === 'string') {
      copyValues[key] = copyValues[key].trim().replace(regexDoubleSpace, ' ');
    }

    return copyValues;
  });

  return copyValues;
};
