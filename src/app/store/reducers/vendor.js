import {
    GET_VENDORS_START, GET_VENDORS, GET_VENDOR_ITEMS_FAILED
} from '../actions/actionTypes';

const initialState = {
	loading: false,
    vendors : [],
    error: null
};

export default function vendor(state = initialState, action) {
    switch (action.type) {
        case GET_VENDORS_START: {
          return { ...state, 'loading' : true, 'error': null }
        }
        case GET_VENDORS: {
            return { ...state, 'loading' : false,  'error': null,
             'vendors': [...state['vendors'], ...action.vendorItems]
             }
        }
        case GET_VENDOR_ITEMS_FAILED: {
            return { ...state, 'loading' : false, 'error': action.error }
        }
        default: {
          return state;
        }
    }
};

