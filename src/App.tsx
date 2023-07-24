import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import MainPage from 'pages/main-page/MainPage';
import NewsPreviewPage from 'pages/news-preview-page/news-preview-page';
import ArticlesPreviewPage from 'pages/articles-preview-page/articles-preview-page';
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
          <Route
            path={routes.articles.route}
            element={<ArticlesPreviewPage />}
          />
          <Route path={routes.podcasts.route} element={<NotFoundPage />} />
          <Route path={routes.drugs.route} element={<NotFoundPage />} />
          <Route
            path={routes.doctorQuestion.route}
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
