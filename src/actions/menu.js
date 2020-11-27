import { ACTIONS } from "../constants";

export default {
  /**
   * Set menu options for the app in the side-bar.
   *
   * @param {String} path        app path
   * @param {Array}  menuOptions menu options
   *
   * @returns {{ type: String, payload: any }} action object
   */
  setAppMenu: (path, menuOptions) => ({
    type: ACTIONS.MENU.SET_APP_MENU,
    payload: { path, menuOptions },
  }),
};
