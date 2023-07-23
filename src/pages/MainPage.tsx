import News from 'components/news/news';
import Articles from 'components/articles/articles';
import AskDoctor from 'components/ask-doctor/ask-doctor';

export default function MainPage() {
  return (
    <>
      <News />
      {/* Карусель */}
      <Articles />
      {/* Подкасты */}
      {/* Подписка */}
      {/* Лекарства и БАД */}
      <AskDoctor />
    </>
  );
}
