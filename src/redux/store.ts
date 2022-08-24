import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './ContactReducer';

const store = configureStore({ reducer });

export default store;
