const yearNow = new Date().getFullYear();
const monthNow = new Date().getMonth();
const dayNow = new Date().getDate();

const renderFormatDateArticle = (articleDateCreation: string): string => {
  const [year, month, day] = articleDateCreation
    .slice(0, articleDateCreation.indexOf('T'))
    .split('-')
    .map(Number);

  let dateArticleCreation = new Date(year, month, day).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  dateArticleCreation = dateArticleCreation.slice(
    0,
    dateArticleCreation.lastIndexOf('г') - 1
  );

  let date = dateArticleCreation;

  if (yearNow === year && monthNow === month && dayNow === day) {
    date = 'Сегодня';
  }

  if (
    yearNow === year &&
    monthNow === month &&
    [-30, -29, -28, -27, 1].includes(dayNow - day) // numbers are the difference between days (taking into account February and leap year)
  ) {
    date = 'Вчера';
  }

  return date;
};

export default renderFormatDateArticle;
