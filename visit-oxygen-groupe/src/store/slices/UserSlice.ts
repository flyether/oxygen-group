import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../../models/iterfaces';


let initialState: IInitialState = {
  name: '',
  login: '',
  token: '',
  id: '',
  allUsers: [],
};




const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setLogin(state, action) {
      state.login = action.payload;
    },
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    setUser(state, action) {
      return { ...action.payload };
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    removeUser(state) {
      state.name = '';
      state.login = '';
      state.token = '';
      state.id = '';
      state.password = '';
      state.allUsers = [];
    },
  },
});

export const { setToken, setUser, setName, removeUser, setId, setAllUsers, setLogin } =
  userSlice.actions;
export default userSlice.reducer;
