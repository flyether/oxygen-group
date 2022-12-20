import { createSlice } from '@reduxjs/toolkit';
import {  IUser } from '../../models/interfaces';


let initialState: IUser = {
  username: '',
 age: null,
 hobbies: [],
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
      state.age = null;
      state.hobbies = '';
    },
  },
});

export const {  setUser, setName, removeUser,  } =
  userSlice.actions;
export default userSlice.reducer;
