import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
const headers = {headers:{
	'Content-Type': 'application/json',
	'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzlhNWFlMjg3NDM3ZDQ2ZGY5M2U3NSIsImlhdCI6MTY1MjQwMTU2NywiZXhwIjoxNjUyNDg3OTY3fQ.zjpX1jZH-XuXNpv1YjuewpdGlj5EmZAuYvrV5gYmvak'
  }
};
export const getCounties = createAsyncThunk('projectDashboardApp/counties/getCounties', async () => {
	const response = await axios.get("http://localhost:3030/api/v1/county",headers);
	const c=response.data.map(d=>({id:d._id, name:d.county_name}));
	console.log(c);
	return c;
});

export const getCountyContituencies = createAsyncThunk('projectDashboardApp/counties/getCounties', async (county_id) => {
	const response = await axios.get("http://localhost:3030/api/v1/county",headers);
	const c=response.data.map(d=>({id:d._id, name:d.county_name}));
	console.log(c);
	return c;
});

const countiesAdapter = createEntityAdapter({});

export const {
	selectAll: selectCounties,
	selectEntities: selectCountiesEntities,
	selectById: selectProjectById
} = countiesAdapter.getSelectors(state => state.projectDashboardApp.counties);

const countiesSlice = createSlice({
	name: 'projectDashboardApp/counties',
	initialState: countiesAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getCounties.fulfilled]: countiesAdapter.setAll
	}
});

export default countiesSlice.reducer;
