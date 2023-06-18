const SET_COURSES = 'SET_COURSES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COURSES_COUNT = 'SET_COURSES_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	courses: [],
	pageSize: 2,
	totalCoursesCount: 10,
	currentPage: 1,
	isFetching: true,
};

export const coursesReducer = (state = initialState, action) => {
	let stateCopy = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case SET_COURSES:
			return { ...stateCopy, courses: action.courses };
		case SET_CURRENT_PAGE:
			return { ...stateCopy, currentPage: action.currentPage };
		case SET_COURSES_COUNT:
			return { ...stateCopy, totalCoursesCount: action.totalCoursesCount };
		case TOGGLE_IS_FETCHING:
			return { ...stateCopy, isFetching: action.isFetching };
		default:
			return stateCopy;
	}
};

export const setCoursesAC = (courses) => {
	return {
		type: SET_COURSES,
		courses,
	};
};

export const setCurrentPageAC = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage,
	};
};

export const setCoursesCountAC = (totalCoursesCount) => {
	return {
		type: SET_COURSES_COUNT,
		totalCoursesCount,
	};
};

export const toggleIsFetchingAC = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching,
	};
};

// thunk
