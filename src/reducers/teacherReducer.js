import { SET_LOADING, STOP_LOADING, ADD_TEACHER } from "../types";

const initialState = {
	teachers: [],
	loading: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case STOP_LOADING:
			return {
				...state,
				loading: false
			};
		case ADD_TEACHER:
			return {
				...state,
				teachers: [ ...state.teachers, action.payload ]
			};
		default:
			return state;
	}
};
