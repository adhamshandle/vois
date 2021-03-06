import { GET_GENERIC_SUCCESS } from '../actions/actionTypes';
export default function (state = {}, action: any) {
	//get request is successful 
	switch (action.type) {
		case GET_GENERIC_SUCCESS:
			return { ...state, [action.payload.type]: action.payload[action.payload.type] };
	}
	return state;
}