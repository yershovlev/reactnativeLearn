import { createStore, applyMiddleware } from "redux";
import { useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
