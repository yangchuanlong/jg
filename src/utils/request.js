import { Toast } from 'antd-mobile';
import axios from 'axios';
import siteConfig from 'constants/config';
import Cookie from 'js-cookie';
import { cloneDeep } from 'lodash';
import { getToken } from 'service/yinweifuli';

axios.defaults.timeout = 180000;
axios.defaults.withCredentials = true;

// 请求拦截 如果登录了，就把token写入header
axios.interceptors.request.use(
  (config) => {
    config.url = siteConfig.apiAppName(config.url);

    config.responseType = config.responseType || 'json';

    let headers = cloneDeep(config.headers) || {};
    headers = {
      ...headers,
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: -1,
      Scene: `${location.hash}, ${encodeURIComponent(
        document.body.querySelector('[class*=page_tab] [class*=active]')
          ?.textContent || '',
      )}`,
    };

    const auth = Cookie.get(siteConfig.cookie.authName);

    if (auth) {
      headers.Authorization = `Bearer ${auth}`;
    }
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    config.headers = headers;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// 响应拦截;
axios.interceptors.response.use(
  (response) => {
    const { data, status, config } = response;
    if (status === 401) {
      getToken(Cookie.get(config.cookie.openId)).then((res) => {
        const { access_token } = res.data;
        Cookie.set(siteConfig.cookie.authName, access_token);
        axios({
          url: config.url,
          method: config.method,
          data: config.data,
          params: config.params,
        });
      });
    }
    return data;
  },
  (error) => {
    console.log(error);
    const { response } = error || {};
    const { data } = response || {};
    if (data.msg) {
      Toast.show(data.msg || '接口错误');
    }
  },
);

window.request = axios;
export default axios;
