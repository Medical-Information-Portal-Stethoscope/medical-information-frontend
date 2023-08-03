import { TArticle } from '../../../utils/types/article';

export type TGetInformationMaterialResponse = {
  next: string;
  previous: null;
  results: TArticle[];
};

export type TError = {
  [key: string]: string;
};
