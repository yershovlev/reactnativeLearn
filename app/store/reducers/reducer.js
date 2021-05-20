import { GET_LISTINGS, ADD_LISTING } from "../actions/actionTypes";

const initialState = {
  listings: new Map(),
};

function listingReducer(state = { ...initialState }, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return { ...state, listings: action.payload };
    case ADD_LISTING: {
      state.listings.set(action.payload.id, action.payload);
      return state;
    }
    default:
      return state;
  }
}

export default listingReducer;
