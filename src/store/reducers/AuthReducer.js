import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    admin: {
        username: 'testAdmin@gmail.com',
        password: '12345yuiopp',
    },
    currentUser: null,
};

const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorize: (state, action) => {
            localStorage.setItem('auth_token', action.payload);
            state.currentUser = action.payload;
        },
        logOut: state => {
            state.currentUser = null;
            localStorage.removeItem('auth_token');
        },
    },
});

export const { authorize, logOut } = AuthReducer.actions;
export default AuthReducer.reducer;
