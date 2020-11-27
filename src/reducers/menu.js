/**
 * Menu reducer
 */
import _ from "lodash";
import { ACTIONS, APP_CATEGORIES } from "../constants";

/**
 * Default Apps Menu structure.
 */
const initialState = APP_CATEGORIES;

/**
 * Find indexes of the category and app in the menu structure by the app's path.
 *
 * @param {Array}  categories list of app categories
 * @param {String} appPath    app path to find
 *
 * @returns {{categoryIndex: number, appIndex: number}} category and app indexes
 */
const findIndexByPath = (categories, appPath) => {
  let categoryIndex = -1;
  let appIndex = -1;

  for (let c = 0; c < categories.length; c++) {
    const category = categories[c];
    const appsCount = category.apps ? category.apps.length : 0;
    for (let a = 0; a < appsCount; a++) {
      const app = category.apps[a];
      if (app.path === appPath) {
        categoryIndex = c;
        appIndex = a;
      }
    }
  }

  return { categoryIndex, appIndex };
};

/**
 * Updates category in the category list without mutation.
 *
 * @param {Array}    categories    list of categories
 * @param {Number}   categoryIndex category index to update
 * @param {Function} update        method which would be applied to the category
 *
 * @returns {Array} updated list of categories
 */
const updateCategory = (categories, categoryIndex, update) => {
  return [
    ...categories.slice(0, categoryIndex),
    update(categories[categoryIndex]),
    ...categories.slice(categoryIndex + 1),
  ];
};

/**
 * Updates app in the category list without mutation.
 *
 * @param {Array}    categories    list of categories
 * @param {Number}   categoryIndex category index
 * @param {Number}   appIndex      app index to update
 * @param {Function} update        method which would be applied to the app
 *
 * @returns {Array} updated list of categories
 */
const updateApp = (categories, categoryIndex, appIndex, update) => {
  return updateCategory(categories, categoryIndex, (category) => ({
    ...category,
    apps: [
      ...category.apps.slice(0, appIndex),
      update(category.apps[appIndex]),
      ...category.apps.slice(appIndex + 1),
    ],
  }));
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.MENU.SET_APP_MENU: {
      const { path, menuOptions } = action.payload;
      const { categoryIndex, appIndex } = findIndexByPath(state, path);

      // if we cannot find the app, just log error and don't try to update it
      if (categoryIndex === -1 || appIndex === -1) {
        console.error(`App is not found by path "${path}".`);
        return state;
      }

      return updateApp(state, categoryIndex, appIndex, (app) => ({
        ...app,
        menu: menuOptions,
      }));
    }
    default:
      return state;
  }
};

export default menuReducer;
