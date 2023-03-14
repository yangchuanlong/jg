const config: any = {
  ENV: 'loc',
  cookie: {
    openId: 'openId',
    authName: 'auth',
  },
};

const envConfig = {
  loc: {
    mock: false,
    publicPath: '',
    host: '/',
    bucketName: 'yishi-yinweifuli-public-dev',
  },
  dev: {
    mock: false,
    publicPath: '',
    host: 'https://yinweifuli-pc-web-api-dev.eshiinfo.com',
    bucketName: 'dev',
  },
  test: {
    mock: false,
    publicPath: '',
    host: 'https://yinweifuli-pc-web-api-test.eshiinfo.com/',
    bucketName: 'test',
  },
  uat: {
    mock: false,
    publicPath: '',
    host: 'https://yinweifuli-pc-web-api-uat.eshiinfo.com',
    bucketName: 'uat',
  },
  prod: {
    mock: false,
    publicPath: '',
    host: 'https://yinweifuli-pc-web-api.eshiinfo.com/',
    bucketName: 'public',
  },
};

// 合并配置
Object.assign(config, envConfig[config.ENV]);

const getApiAppName = function (url: any) {
  if (!url) {
    return '';
  }
  if (url.indexOf('http') >= 0) {
    return url;
  }

  const { host } = config;
  if (url.includes('question')) {
    url = `marketing-wireless/yinweifuli-marketing-wireless${url}`;
  } else if (url.includes('commodity')) {
    url = `shop-wireless/yinweifuli-shop-wireless${url}`;
  } else if (url.includes('category')) {
    url = `shop-wireless/yinweifuli-shop-wireless${url}`;
  } else if (url.includes('banner')) {
    url = `system-wireless/yinweifuli-system-wireless${url}`;
  } else if (url.includes('order')) {
    url = `order-wireless/yinweifuli-order-wireless${url}`;
  }

  url = url.replace(/\/{2,}/g, '/');
  url = url.replace(/^\//, '');

  return `${host.replace(/\/$/, '')}/${url}`;
};
// 拼接接口所需域名和服务名，只需要输入接口名即可  如 yundt/mgmt/item/list-by-page，也不要加斜杆开始，
// 如果接口以http开头，则不会进拼接，而是保留原样
config.apiAppName = getApiAppName;

export default config;
