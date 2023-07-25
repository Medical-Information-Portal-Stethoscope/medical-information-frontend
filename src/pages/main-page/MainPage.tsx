import { Header } from 'components/header';
import News from 'components/news/news';
import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import Medicines from 'components/medicines/medicines';
import AskDoctor from 'components/ask-doctor/ask-doctor';
import Podcasts from 'components/podcasts';
import Footer from 'components/footer/footer';

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <News />
        <Articles />
        <Podcasts />
        <SubscribeBlock />
        <Medicines />
        <AskDoctor />
      </main>
      <Footer />
    </>
  );
}
