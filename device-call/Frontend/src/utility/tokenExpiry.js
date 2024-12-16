export function isTokenExpire(tokenInfo) {
    const { exp } = parseJwt(tokenInfo);
    let expireTime = new Date(exp * 1000);
    const currentDate = new Date();
    return expireTime <= currentDate
  }


  
function parseJwt(token) {
    var base64Url = token?.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }