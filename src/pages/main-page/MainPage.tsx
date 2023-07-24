import News from 'components/news/news';
import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import Medicines from 'components/medicines/medicines';
import AskDoctor from 'components/ask-doctor/ask-doctor';
import MainCarousel from 'components/carousel/MainCarousel';
import Podcasts from 'components/podcasts';

export default function MainPage() {
  return (
    <>
      <News />
      <MainCarousel />
      <Articles />
      <Podcasts />
      <SubscribeBlock />
      <Medicines />
      <AskDoctor />
    </>
  );
}
