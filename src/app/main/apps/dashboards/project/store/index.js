import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import positions from './positionsSlice';
import counties from './countiesSlice';
import widgets from './widgetsSlice';

const reducer = combineReducers({
	widgets,
	projects,
	positions,
	counties
});

export default reducer;
