/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/main-page/main-page';
import { useAppDispatch } from 'services/app/hooks';
import { getUserPersonalData } from 'services/features/user/api';
import NewsPreviewPage from 'pages/news-preview-page/news-preview-page';
import { AuthorsPage } from 'pages/authors/authors';
import SignUpPage from 'pages/sign-up/sign-up';
import SignInPage from 'pages/sign-in/sign-in';
import ArticlesPreviewPage from 'pages/articles-preview-page/articles-preview-page';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import AboutPage from 'pages/about-page/about-page';
import routes from 'utils/routes';
import { Article } from 'pages/article';
import { News } from 'pages/news';
import ProfilePage from 'pages/profile/profile-page';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token: string | null | undefined = localStorage.getItem('auth_token');

    if (token) {
      dispatch(getUserPersonalData(token));
    }
  }, []); // eslint-disable-line

  return (
    <Routes>
      <Route path={routes.home} element={<MainPage />} />
      <Route path={routes.news.route} element={<NewsPreviewPage />} />
      <Route path={`${routes.news.route}/:id`} element={<News />} />

      <Route path={routes.articles.route} element={<ArticlesPreviewPage />} />
      <Route path={`${routes.articles.route}/:id`} element={<Article />} />

      <Route path={routes.podcasts.route} element={<NotFoundPage />} />
      <Route path={routes.drugs.route} element={<NotFoundPage />} />
      <Route path={routes.doctorQuestion.route} element={<NotFoundPage />} />
      <Route path={routes.about.route} element={<AboutPage />} />
      <Route path={routes.authors.route} element={<AuthorsPage />} />

      <Route path={routes.signup} element={<SignUpPage />} />
      <Route path={routes.signin} element={<SignInPage />} />

      <Route path={`${routes.profile}/*`} element={<ProfilePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
