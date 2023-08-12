import { useScrollToTop } from 'hooks/useScrollToTop';
import { Header } from 'components/header';
import News from 'components/news/news';
import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import Footer from 'components/footer/footer';

export default function MainPage() {
  useScrollToTop();

  return (
    <>
      <Header />
      <main>
        <News />
        <Articles />
        <SubscribeBlock />
      </main>
      <Footer />
    </>
  );
}
