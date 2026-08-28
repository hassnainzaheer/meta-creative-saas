// Server-only Meta SDK bootstrap. Never expose META_APP_SECRET or access tokens to the browser.
export function createMetaApi(accessToken:string){
  // require() keeps the starter compatible with the SDK's current CommonJS packaging.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const adsSdk = require('facebook-nodejs-business-sdk');
  return adsSdk.FacebookAdsApi.init(accessToken);
}
