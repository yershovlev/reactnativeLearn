import { createStore, applyMiddleware } from "redux";
import { useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

import { GET_LISTINGS, ADD_LISTING } from "./actions/actionTypes";

import reducer from "./reducers/reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
