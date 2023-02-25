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
    component: React.lazy(() => import('pages/index/index')),
  },
  ...error,
];
