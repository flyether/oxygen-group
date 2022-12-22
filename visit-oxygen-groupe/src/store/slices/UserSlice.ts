import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/interfaces';

let initialState: IUser = {
  name: '',
  email: '',
  description: '',
  phone:''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },


    setUser(state, action) {
      return { ...action.payload };
    },
 
    removeUser(state) {
      state.name = '';
      state.email = null;
      state.description = '';
      state.phone = '';
    },
  },
});

export const {  setUser, setName, removeUser,  } =
  userSlice.actions;
export default userSlice.reducer;
