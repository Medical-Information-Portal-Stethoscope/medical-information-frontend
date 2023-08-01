import { regexDoubleSpace } from 'utils/regex';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterFormValues = (values: any) => {
  const copyValues = { ...values };

  Object.keys(copyValues).map((key) => {
    if (typeof copyValues[key] === 'string') {
      copyValues[key] = copyValues[key].trim().replace(regexDoubleSpace, ' ');
    }

    return copyValues;
  });

  return copyValues;
};