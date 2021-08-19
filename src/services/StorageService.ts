const LOCALSTORAGE_KEY_PREFIX = "voyager-basket";

export default {
  get(item: string) {
    try {
      return window.localStorage.getItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`);
    } catch (e) {
      return null;
    }
  },
  set(item: string, value: string) {
    try {
      window.localStorage.setItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`, value);
    } catch (e) {}
  },
};
