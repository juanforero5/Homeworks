import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid : null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.email;
        },
        logout: (state, action) => {
            
        },
        checkingCredentials: (state, action) => {
            console.log('checkingCredentials');
        },

    }
});

export const {login, logout, checkingCredentials} = authSlice.actions;
