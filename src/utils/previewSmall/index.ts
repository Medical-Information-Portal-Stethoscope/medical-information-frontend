import { TArticle } from 'utils/types/article';

export const generateSmallPreview = (
  data: TArticle[],
  maxNumberWindow: number,
  id: string
) => {
  const dataArr = data.filter((item) => item.id !== id);
  return dataArr.slice(0, maxNumberWindow);
};
