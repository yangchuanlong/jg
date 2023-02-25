// 判断是否从微信进来
export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase();
  const weixin = ua.match(/MicroMessenger/i)
    ? ua.match(/MicroMessenger/i).toString() === 'micromessenger'
    : false;
  if (weixin) {
    return true;
  }
  return false;
}

/*
 * 调用各端登录
 */
export function login(callback) {
  if (isWeixin()) {
    try {
      wx.miniProgram.getEnv((res) => {
        if (res.miniprogram) {
          wx.miniProgram.redirectTo({
            url: `/pages/login/login?target=${encodeURIComponent(
              window.location.href,
            )}`,
          });
        } else {
          callback();
        }
      });
    } catch (e) {
      callback();
    }
  } else {
    callback();
  }
}
