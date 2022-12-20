import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/interfaces';

let initialState: IUser = {
  username: '',
  email: '',
  description: '',
  phone:''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action) {
      state.username = action.payload;
    },


    setUser(state, action) {
      return { ...action.payload };
    },
 
    removeUser(state) {
      state.username = '';
      state.email = null;
      state.description = '';
      state.phone = '';
    },
  },
});

export const {  setUser, setName, removeUser,  } =
  userSlice.actions;
export default userSlice.reducer;
