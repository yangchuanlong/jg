import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import App from 'components/app';
import { Provider } from 'mobx-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import stores from './stores';

import './index.less';

const container = document.getElementById('app');

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ConfigProvider locale={zhCN}>
    <Provider {...stores}>
      <App />
    </Provider>
  </ConfigProvider>,
);
