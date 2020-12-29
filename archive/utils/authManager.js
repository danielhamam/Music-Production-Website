const TOKEN_KEY = 'MUSIC_PRODUCTION_TOKEN';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, `bearer ${token}`);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}