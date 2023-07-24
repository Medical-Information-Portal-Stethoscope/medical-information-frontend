import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/main-page/MainPage';
import NewsPreviewPage from 'pages/news-preview-page/news-preview-page';
import SignUpPage from 'pages/sign-up/sign-up';
import SignInPage from 'pages/sign-in/sign-in';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import routes from 'utils/routes';

function App() {
  // TODO: correct routes

  return (
    <Routes>
      <Route path={routes.home} element={<MainPage />} />
      <Route path={routes.news.route} element={<NewsPreviewPage />} />
      <Route path={routes.articles.route} element={<NotFoundPage />} />
      <Route path={routes.podcasts.route} element={<NotFoundPage />} />
      <Route path={routes.drugs.route} element={<NotFoundPage />} />
      <Route path={routes.doctorQuestion.route} element={<NotFoundPage />} />

      <Route path={routes.signup} element={<SignUpPage />} />
      <Route path={routes.signin} element={<SignInPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
