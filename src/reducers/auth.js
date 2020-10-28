/**
 * `auth` reducer
 */
import { ACTIONS } from "../constants";
import { getStoreManager } from '../global-store';

const initialState = {
  isInitialized: false,
  tokenV2: null,
  tokenV3: null,
  profile: null,
};

const authStore = getStoreManager().getGlobalStore().auth;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH.SET_TOKEN_V2: {
      const nextState = {
        ...state,
        tokenV2: action.payload,
      };
      // Update global state
      authStore.setAuthState(nextState);
      return nextState;
    }
    case ACTIONS.AUTH.SET_TOKEN_V3:  {
      const nextState = {
        ...state,
        tokenV3: action.payload,
      };
      // Update global state
      authStore.setAuthState(nextState);
      return nextState;
    }
    case ACTIONS.AUTH.LOAD_PROFILE: {
      const nextState = {
        ...state,
        profile: action.payload,
      };
      // Update global state
      authStore.setAuthState(nextState);
      return nextState;
    }
    case ACTIONS.AUTH.SET_INITIALIZED:{
      const nextState = {
        ...state,
        isInitialized: true,
      };
      // Update global state
      authStore.setAuthState(nextState);
      return nextState;
    }
    default: {
      // Update global state
      authStore.setAuthState(state);
      return state;
    }
  }
};

export default authReducer;
