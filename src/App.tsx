/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/main-page/main-page';
import { useAppDispatch } from 'services/app/hooks';
import { getUserPersonalData } from 'services/features/user/api';
import NewsPreviewPage from 'pages/news-preview-page/news-preview-page';
import { AuthorsPage } from 'pages/authors/authors';
import ArticlesPreviewPage from 'pages/articles-preview-page/articles-preview-page';
import SignUpPage from 'pages/sign-up/sign-up';
import { SignUpActivationPage } from 'pages/sign-up-activation/sign-up-activation';
import SignInPage from 'pages/sign-in/sign-in';
import { ResetPasswordPage } from 'pages/reset-password/reset-password';
import { ResetPasswordConfirmationPage } from 'pages/reset-password-confirmation/reset-password-confirmation';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import AboutPage from 'pages/about-page/about-page';
import routes from 'utils/routes';
import { Article } from 'pages/article';
import { News } from 'pages/news';
import ProfilePage from 'pages/profile/profile-page';
import UserProfile from 'components/user-profile/user-profile';
import { FavoritesPage } from 'pages/favorites/favorites';
import { CreatingAnArticlePage } from 'pages/creating-an-article/creating-an-article';

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
      <Route
        path={routes.signupActivation}
        element={<SignUpActivationPage />}
      />
      <Route path={routes.signin} element={<SignInPage />} />
      <Route path={routes.password.reset} element={<ResetPasswordPage />} />
      <Route
        path={routes.password.resetConfirmation}
        element={<ResetPasswordConfirmationPage />}
      />

      <Route path={`${routes.profile}/*`} element={<ProfilePage />}>
        <Route index element={<UserProfile />} />
        <Route path={routes.favorites} element={<FavoritesPage />} />
        <Route path={routes.publication} element={<CreatingAnArticlePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
