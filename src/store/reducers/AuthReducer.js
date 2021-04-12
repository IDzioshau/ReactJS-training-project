import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    admin: {
        username: 'testAdmin@gmail.com',
        password: '12345yuiopp',
    },
    currentUser: null,
    isAdmin: false,
};

const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorize: (state, action) => {
            localStorage.setItem('auth_token', JSON.stringify(action.payload));
            state.currentUser = action.payload;
            state.isAdmin =
                JSON.stringify(action.payload) === JSON.stringify(state.admin);
        },
        logOut: state => {
            state.currentUser = null;
            localStorage.removeItem('auth_token');
            state.isAdmin = false;
        },
    },
});

export const { authorize, logOut } = AuthReducer.actions;
export default AuthReducer.reducer;
