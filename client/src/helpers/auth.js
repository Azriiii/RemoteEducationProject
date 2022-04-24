import cookie from 'js-cookie';

// set in cookie
export const setCookie = (key,value) => {
    if(window!=='undefiend'){
        cookie.set(key,value,{
            expires:1

        })
    }
}
//remove from cookie
export const removeCookie = key => {
    if(window!=='undefiend'){
        cookie.remove(key,{
            expires:1
        });
    }
};

// get from cookie like token
export const getCookie = key =>{
    if(window!=='undefiend'){
        return cookie.get(key);

    }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Remove from localstorage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};   

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();
};
// Access user info from localstorage
export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};

//signout
export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();
};
// update
export const updateUser = (response, next) => {
    console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response);
    if (typeof window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('user'));
        auth = response.data;
        localStorage.setItem('user', JSON.stringify(auth));
    }
    next();
};  