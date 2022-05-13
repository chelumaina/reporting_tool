import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
const headers = {headers:{
	'Content-Type': 'application/json',
	'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzlhNWFlMjg3NDM3ZDQ2ZGY5M2U3NSIsImlhdCI6MTY1MjQwMTU2NywiZXhwIjoxNjUyNDg3OTY3fQ.zjpX1jZH-XuXNpv1YjuewpdGlj5EmZAuYvrV5gYmvak'
  }
};


export const getCountyContituencies = createAsyncThunk('projectDashboardApp/constituencies/getCountyContituencies', async (county_id) => {
	const response = await axios.get(`http://localhost:3030/api/v1/constituency/get_county_constituencies/${county_id}`,headers);
	const c=response.data.map(d=>({id:d._id, name:d.constituency_name}));
	console.log(c);
	return c;
});

const constituenciesAdapter = createEntityAdapter({});

export const {
	selectAll: selectConstituencies,
	selectEntities: selectConstituenciesEntities,
	selectById: selectProjectById
} = constituenciesAdapter.getSelectors(state => state.projectDashboardApp.constituencies);

const constituenciesSlice = createSlice({
	name: 'projectDashboardApp/constituencies',
	initialState: constituenciesAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getCountyContituencies.fulfilled]: constituenciesAdapter.setAll
	}
});

export default constituenciesSlice.reducer;
