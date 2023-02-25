import React from 'react';

export default [
  {
    path: '/404',
    component: React.lazy(
      () => import('pages/error/404/index'),
    ),
  },
];
