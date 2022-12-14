import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  username: null
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.username = action.payload.username
    }
  }
});

export const { setUser } = slice.actions;

export default slice.reducer;