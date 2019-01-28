import { ReduceStore } from "flux/utils";
import CountdownActionTypes from "./CountdownActionTypes";
import Dispatcher from "../Dispatcher";

class CountdownStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return new Date("Jan 12, 2020 19:30:00");
  }

  reduce(state, action) {
    switch (action.type) {
      case CountdownActionTypes.UPDATE_DATE:
        if (!action.date) {
          return state;
        }
        return state.set(action.date);
      default:
        return state;
    }
  }
}

export default new CountdownStore();
