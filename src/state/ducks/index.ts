import { combineReducers } from "redux";
import { IScorecardState, scorecardReducer } from "./scorecard/reducers";

export interface IApplicationState {
  scorecard: IScorecardState;
}

export const rootReducer = combineReducers<IApplicationState>({
  scorecard: scorecardReducer
});
