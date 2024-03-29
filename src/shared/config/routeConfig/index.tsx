import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';
import * as React from 'react';
import { RouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const About = React.lazy(() => import('pages/About'));

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_CREATE = 'article_create',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.PROFILE]: '/profile/', // + id
  [AppRouter.ARTICLES]: '/articles',
  [AppRouter.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRouter.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRouter.ARTICLE_CREATE]: '/articles/create',
  [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, AppRoutesProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <Home />,
  },
  [AppRouter.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [AppRouter.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRouter.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRouter.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRouter.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRouter.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRouter.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
