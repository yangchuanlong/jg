import { LoadingOutlined } from '@ant-design/icons';
import { Toast } from 'antd-mobile';
import config from 'constants/config';
import Cookie from 'js-cookie';
import moment from 'moment';
import 'moment/locale/zh-cn'; // moment 语言设置为中文
import Login from 'pages/login';
import React, { Suspense, useEffect } from 'react';
import {
  HashRouter, Navigate, Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import routers from 'router/index';
import { getToken } from 'service/yinweifuli';
import { isWeixin } from 'utils/utils';
import styles from './index.less';

moment.locale('zh-cn');

function Redirect({ path }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
  }, []);
  return <></>;
}

function Content() {
  const location = useLocation();
  // 从微信小程序来的
  if (isWeixin()) {
    // wx.miniProgram.getEnv((res) => {
    //   if (res.miniprogram) {
    //     const urlSearch = new URLSearchParams(location.search);
    //     const openId = urlSearch.get('openId');
    //     Cookie.set(config.cookie.openId, openId);
    //     getToken(openId).then((res) => {
    //       const { access_token } = res.data;
    //       Cookie.set(config.cookie.authName, access_token);
    //     });
    //   } else {
    //     Toast.show('微信公众号');
    //   }
    // });
  }

  // 如果还没登陆;(微信浏览器中的Cookie.get(config.cookie.authName) === 'null')
  if (!Cookie.get(config.cookie.authName) || Cookie.get(config.cookie.authName) === 'null') {
    // return <Navigate to="/login" />;
  }

  return (
    <Routes>
      {routers.map((route) => {
        const { path } = route;
        console.log('routers:', route);

        return (
          <Route
            path={path}
            key={path}
            element={(
              <Suspense
                fallback={(
                  <div className={styles.loading}>
                    <LoadingOutlined />
                    正在加载中...
                  </div>
                )}
              >
                <route.component />
              </Suspense>
            )}
          />
        );
      })}
      <Route path="*" element={<Redirect path="/404" />} />
    </Routes>
  );
}

function AppView() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Content />} />
      </Routes>
    </HashRouter>
  );
}

export default AppView;
