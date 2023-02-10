
import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false,
    userDetails: {
        id:null,
        firstName: null,
        lastName: null,
        email: null,
        role: null,
    }
};

const authSlice = createSlice(
    {
        name: 'authentication',
        initialState: initialAuthState,
        reducers: {
            loginSuccessful(state, action) {
                state.isAuthenticated = true;
                state.userDetails = {
                    id:action.payload.userDetails.id,
                    firstName: action.payload.userDetails.firstName,
                    lastName: action.payload.userDetails.lastName,
                    email: action.payload.userDetails.email,
                    role: action.payload.userDetails.role
                };
            },
            logout(state) {
                state.isAuthenticated = false;
                state.userDetails = {
                    id:null,
                    firstName: null,
                    lastName: null,
                    email: null,
                    role: null,
                }
            }
        }
    }
);

export default authSlice;