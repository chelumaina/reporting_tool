import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const headers = {headers:{
	'Content-Type': 'application/json',
	'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzlhNWFlMjg3NDM3ZDQ2ZGY5M2U3NSIsImlhdCI6MTY1MjQwMTU2NywiZXhwIjoxNjUyNDg3OTY3fQ.zjpX1jZH-XuXNpv1YjuewpdGlj5EmZAuYvrV5gYmvak'
  }
};
export const getPositions = createAsyncThunk('projectDashboardApp/positions/getPositions', async () => {
	const response = await axios.get("http://localhost:3030/api/v1/position",headers);
	const c=response.data.map(d=>({id:d._id, name:d.name}));
	return c;
});

const positionsAdapter = createEntityAdapter({});

export const {
	selectAll: selectPositions,
	selectEntities: selectPositionsEntities,
	selectById: selectProjectById
} = positionsAdapter.getSelectors(state => state.projectDashboardApp.positions);

const positionsSlice = createSlice({
	name: 'projectDashboardApp/positions',
	initialState: positionsAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getPositions.fulfilled]: positionsAdapter.setAll
	}
});

export default positionsSlice.reducer;
