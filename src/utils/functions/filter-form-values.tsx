import { regexDoubleSpace } from 'utils/regex';
import { IFormValues } from 'utils/types/general';

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
