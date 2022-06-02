import { ADD_ITEM, REMOVE_ITEM } from './cartTypes';

export const addItem = (data) => {
	return {
		type: ADD_ITEM,
		payload: data
	};
};

export const removeItem = () => {
	return {
		type: REMOVE_ITEM,
	};
};