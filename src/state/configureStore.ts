import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, rootReducer } from "./ducks/index";
import logger from "./middlewares/logger";

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = applyMiddleware(logger); // Create Store
  const store = createStore(rootReducer, initialState, middlewares);

  return store;
}
