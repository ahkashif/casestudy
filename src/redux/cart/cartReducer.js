import { ADD_ITEM, REMOVE_ITEM } from './cartTypes';
const initialState = {
	cart: [],
};

const cartReducer = (state = initialState, action) => {
	console.log('action', action)
	switch (action.type) {
		case ADD_ITEM:
			return {cart: [...state.cart, action.payload]}
			;
		default:
			return state;
	}
};

export default cartReducer;
