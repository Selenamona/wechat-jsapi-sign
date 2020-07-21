# 获取微信签名

## | demo1-src

`npm run start`

访问地址: `http://localhost:3000?appid={APPID}&secret={APPSECRET}`

## | demo2-public

`node ./public/check_sign.js`

---

[微信公众平台](https://mp.weixin.qq.com/)

> [微信 JS 接口签名校验工具](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign)

> 解决微信安全域名配置问题:

`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
