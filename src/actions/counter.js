import { ACTIONS } from "../constants";

export default {
  increment: () => ({
    type: ACTIONS.COUNTER.INCREMENT,
  }),
  decrement: () => ({
    type: ACTIONS.COUNTER.DECREMENT,
  }),
};
