import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            username: 'testAdmin@gmail.com',
            password: '12345yuiopp',
            role: 'ADMIN',
        },
        { username: 'testUser@gmail.com', password: '12345UsEr', role: 'USER' },
    ],
    currentUser: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorize(state, action) {
            localStorage.setItem('auth_token', action.payload.username);
            state.currentUser = action.payload;
        },
        logOut(state) {
            state.currentUser = null;
            localStorage.removeItem('auth_token');
        },
    },
});

export const { authorize, logOut } = authSlice.actions;
export default authSlice.reducer;
