import News from 'components/news/news';
import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import AskDoctor from 'components/ask-doctor/ask-doctor';
import MainCarousel from 'components/carousel/MainCarousel';

export default function MainPage() {
  return (
    <>
      <News />
      <MainCarousel />
      <Articles />
      {/* Подкасты */}
      <SubscribeBlock />
      {/* Лекарства и БАД */}
      <AskDoctor />
    </>
  );
}
