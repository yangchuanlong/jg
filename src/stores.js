import appStore from 'components/app/app-store';
// import commonStore from 'store/common-store';

const modules = {
  appStore,
  // commonStore,
};
const requireContext = require.context('pages', true, /-store\.(js|ts)$/);
requireContext.keys().forEach((key) => {
  // key 是像这样的字符串  ./building/building-list/building-list-store.ts
  const pathParts = key.split('/');
  const modelKey = pathParts[pathParts.length - 1]
    .replace(/\.(js|ts)/, '')
    .replace(/-([a-z])/g, (match) => match[1].toUpperCase()); // 文件名作为key
  modules[modelKey] = requireContext(key).default;
});

export default modules;
