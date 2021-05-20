import listingsApi from "../../api/listings";
import { GET_LISTINGS, ADD_LISTING } from "../actions/actionTypes";

export const getListings = (values) => {
  try {
    return async (dispatch) => {
      const response = await listingsApi.getListings();
      const map = new Map();
      response.data.forEach((element) => {
        map.set(element.id, element);
      });

      if (response.data) {
        dispatch({
          type: GET_LISTINGS,
          payload: map,
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  } catch (error) {}
};

export const addListing = (...values) => {
  try {
    return async (dispatch) => {
      const response = await listingsApi.addListing(...values);

      if (response.ok) {
        dispatch({
          type: ADD_LISTING,
          payload: values,
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  } catch (error) {}
};
