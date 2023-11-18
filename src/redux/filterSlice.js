import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
      prepare(filter) {
        return { payload: filter };
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
