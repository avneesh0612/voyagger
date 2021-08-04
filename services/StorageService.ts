import { itemtype } from "../types/itemTypes";

const LOCALSTORAGE_KEY_PREFIX = "voyager-basket";

export default {
  get(item: itemtype) {
    try {
      return window.localStorage.getItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`);
    } catch (e) {
      return null;
    }
  },
  set(item: itemtype, value: any) {
    try {
      window.localStorage.setItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`, value);
    } catch (e) {}
  },
};
