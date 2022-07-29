import createPersistedState from 'vuex-persistedstate';
import * as Cookies from "js-cookie";

const cookieStorage = {
  getItem: function(key) {
    return Cookies.get(key);
  },
  setItem: function(key, value) {
    return Cookies.set(key, value, {expires: 3, secure: false});
  },
  removeItem: function(key) {
    return Cookies.remove(key);
  }
};

export default (context) => {
  createPersistedState({
    storage: cookieStorage,
    getState: cookieStorage.getItem,
    setState: cookieStorage.setItem
  })(context.store);
};