import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { appReducer } from "./reducer";
import watchAll from "./sagas/main";
import { composeWithDevTools } from "@redux-devtools/extension";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
export const store = createStore(
  appReducer,
  compose(
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    //@ts-ignore
  )
);

// Then run the saga
sagaMiddleware.run(watchAll);
