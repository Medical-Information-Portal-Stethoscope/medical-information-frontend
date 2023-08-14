import { useAppSelector } from 'services/app/hooks';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { Header } from 'components/header';
import News from 'components/news/news';
import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import Footer from 'components/footer/footer';
import { showUserPersonalData } from 'services/features/user/selectors';

export default function MainPage() {
  useScrollToTop();

  const { user } = useAppSelector(showUserPersonalData);

  return (
    <>
      <Header />
      <main>
        <News />
        <Articles />
        {!user && <SubscribeBlock />}
      </main>
      <Footer />
    </>
  );
}
