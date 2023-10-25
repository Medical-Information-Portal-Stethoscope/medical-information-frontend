/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'services/app/hooks';

import { OnlyAuth, OnlyUnAuth } from 'hocs/withProtectedRoute';

import MainPage from 'pages/main-page/main-page';
import NewsPreviewPage from 'pages/news-preview/news-preview';
import { News } from 'pages/news';
import ArticlesPreviewPage from 'pages/articles-preview/articles-preview';
import { Article } from 'pages/article';
import AboutPage from 'pages/about-us/about-us';
import { AuthorsPage } from 'pages/authors/authors';

import ProfilePage from 'pages/profile/profile-page';
import UserProfile from 'components/user-profile/user-profile';
import { FavoritesPage } from 'pages/favorites/favorites';
import { CreatingAnArticlePage } from 'pages/creating-an-article/creating-an-article';

import SignUpPage from 'pages/sign-up/sign-up';
import { SignUpActivationPage } from 'pages/sign-up-activation/sign-up-activation';

import SignInPage from 'pages/sign-in/sign-in';

import { ResetPasswordPage } from 'pages/reset-password/reset-password';
import { ResetPasswordConfirmationPage } from 'pages/reset-password-confirmation/reset-password-confirmation';
import { NotFoundPage } from 'pages/error-page/notFoundPage';

import { getUserPersonalData } from 'services/features/user/api';
import { checkUserAuth } from 'services/features/user/slice';

import routes from 'utils/routes';
import SearchPage from 'pages/search-page/search-page';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const background = location.state?.background;

  useEffect(() => {
    const token: string | null | undefined = localStorage.getItem('auth_token');

    if (token) {
      dispatch(getUserPersonalData(token));
    }

    dispatch(checkUserAuth());
  }, []); // eslint-disable-line

  return (
    <Routes location={background || location}>
      <Route path={routes.home} element={<MainPage />} />

      <Route path={routes.news.route} element={<NewsPreviewPage />} />
      <Route path={`${routes.news.route}/:id`} element={<News />} />

      <Route path={routes.articles.route} element={<ArticlesPreviewPage />} />
      <Route path={`${routes.articles.route}/:id`} element={<Article />} />

      <Route path={routes.about.route} element={<AboutPage />} />
      <Route path={routes.authors.route} element={<AuthorsPage />} />

      <Route path={`${routes.search.route}/:query`} element={<SearchPage />} />

      <Route
        path={`${routes.profile}/*`}
        element={<OnlyAuth component={<ProfilePage />} />}
      >
        <Route index element={<UserProfile />} />
        <Route path={routes.favorites} element={<FavoritesPage />} />
        <Route path={routes.publication} element={<CreatingAnArticlePage />} />
      </Route>

      <Route
        path={routes.signup}
        element={<OnlyUnAuth component={<SignUpPage />} />}
      />
      <Route
        path={routes.signupActivation}
        element={<OnlyUnAuth component={<SignUpActivationPage />} />}
      />

      <Route
        path={routes.signin}
        element={<OnlyUnAuth component={<SignInPage />} />}
      />
      <Route
        path={routes.password.reset}
        element={<OnlyUnAuth component={<ResetPasswordPage />} />}
      />
      <Route
        path={routes.password.resetConfirmation}
        element={<OnlyUnAuth component={<ResetPasswordConfirmationPage />} />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
