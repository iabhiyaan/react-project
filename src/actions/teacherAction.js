import axios from "axios";
import { SET_LOADING, STOP_LOADING, ADD_TEACHER } from "../types";

// SET loading to TRUE
export function setLoading() {
	return {
		type: SET_LOADING
	};
}

// STOP loading to TRUE
export function stopLoading() {
	return {
		type: STOP_LOADING
	};
}

// add teacher
export function addTeacher(newTeacher) {
	console.log(newTeacher);
	return {
		type: ADD_TEACHER,
		payload: newTeacher
	};
}
