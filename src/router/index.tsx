import React from 'react';
import { Navigate } from 'react-router-dom';
import error from './error';

export default [
  {
    path: '/',
    component: () => <Navigate to="/index" />,
  },
  {
    path: '/index',
    showTabBar: true,
    component: React.lazy(() => import('pages/index/index')),
  },
  {
    path: '/park-detail',
    component: React.lazy(() => import('pages/park-detail/index')),
  },
  {
    path: '/compare',
    component: React.lazy(() => import('pages/compare/compare.tsx')),
  },
  {
    path: '/my-park',
    component: React.lazy(() => import('pages/my-park/my-park.tsx')),
  },
  {
    path: '/recommend',
    component: React.lazy(() => import('pages/recommend/recommend.tsx')),
  },
  {
    path: 'register',
    component: React.lazy(() => import('pages/register/register.tsx')),
  },
  {
    path: 'register-extra',
    component: React.lazy(() => import('pages/register-extra/register-extra.tsx')),
  },
  ...error,
];
