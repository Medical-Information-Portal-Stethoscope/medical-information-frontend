const findReadingTimeArticle = (text: string): string => {
  const averageReadingWordsPerMinute = 220;
  const totalWordsArticleCounter = text.split(' ').length;

  return `${Math.ceil(
    totalWordsArticleCounter / averageReadingWordsPerMinute
  )} мин`;
};

export default findReadingTimeArticle;
