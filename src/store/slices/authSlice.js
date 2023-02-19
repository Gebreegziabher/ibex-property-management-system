
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
                    id:action.payload.userResponseDto.id,
                    firstName: action.payload.userResponseDto.firstName,
                    lastName: action.payload.userResponseDto.lastName,
                    email: action.payload.userResponseDto.email,
                    role: action.payload.userResponseDto.role
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