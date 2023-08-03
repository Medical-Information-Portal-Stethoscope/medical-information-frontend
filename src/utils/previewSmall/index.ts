import { TArticle } from 'utils/types/article';

export const generateSmallPreview = (
  data: TArticle[],
  maxNumberWindow: number,
  id: string
) => {
  const randomData: TArticle[] = [];

  while (randomData.length < maxNumberWindow) {
    const randomN = Math.floor(Math.random() * data.length);
    const randomItem = data[randomN];
    if (!randomData.includes(randomItem) && randomItem.id !== id) {
      randomData.push(randomItem);
    }
  }

  return randomData;
};
