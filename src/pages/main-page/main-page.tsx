import { useScrollToTop } from 'hooks/useScrollToTop';
import { Header } from 'components/header';
import News from 'components/news/news';
import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import Footer from 'components/footer/footer';
import { Breadcrumbs } from 'components/breadcrumbs';

export default function MainPage() {
  useScrollToTop();

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <News />
        <Articles />
        <SubscribeBlock />
      </main>
      <Footer />
    </>
  );
}
