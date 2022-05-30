import axios from 'axios';
import * as types from './actionTypes';

export const fetchVendorsStart = () => {
  return {
    type: types.GET_VENDORS_START,
  };
};

export const setVendorItems = (vendorItems, val) => {
  return {
    type: types.GET_VENDORS,
    vendorItems: vendorItems
  };
};

export const getVendorItemsFailed = error => {
  return {
    type: types.GET_VENDOR_ITEMS_FAILED,
    error: error
  };
};

export const getVendors = (pageNumber, val) => {
    return dispatch => {
      dispatch(fetchVendorsStart());
      axios({
        method: 'GET',
        url: 'https://snappfood.ir/mobile/v3/restaurant/vendors-list',
        params : {
          page : pageNumber,
          page_size: 5,
          lat: 35.754,
          long: 51.328
        }
      }).then(res => {
          console.log(res)
          dispatch(setVendorItems(res.data.data.finalResult, val));
      }).catch(e => {
          dispatch(getVendorItemsFailed(e));
      })
    };
  };