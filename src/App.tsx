import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import MainPage from 'pages/main-page/MainPage';
import NewsPreviewPage from 'pages/news-preview-page/news-preview-page';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import routes from 'utils/routes';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={routes.home} element={<MainPage />} />
          <Route path={routes.news.route} element={<NewsPreviewPage />} />
          {/* {articles} */}
          <Route path="/podcasts" element={<NotFoundPage />} />
          <Route path="/drugs" element={<NotFoundPage />} />
          <Route path="/doctor" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
