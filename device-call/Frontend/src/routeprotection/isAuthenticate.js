import { isTokenExpire } from "../utility/tokenExpiry";
export const isAuthenticated = () => {
    const user_info = JSON.parse(localStorage.getItem('user_info'));
    return user_info && !isTokenExpire(user_info?.accessToken);
  };