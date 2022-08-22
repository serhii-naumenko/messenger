import { createSlice } from '@reduxjs/toolkit';
import { OneContactInfo } from '../OneContactInfoType';
import { startContactsInfo } from '../StartContacts.json';

const contactsInfoFromStorage = localStorage.getItem('contacts');
let contactsStart: OneContactInfo[] = startContactsInfo;

if (contactsInfoFromStorage !== null) {
  contactsStart = JSON.parse(contactsInfoFromStorage);
}

interface InitialState {
  startContactsInfo: OneContactInfo[],
  chosenContact: OneContactInfo,
}

const initialState: InitialState = {
  startContactsInfo: [...contactsStart],
  chosenContact: startContactsInfo[0],
};

const occasionReducer = createSlice({
  name: 'contactInao',
  initialState,
  reducers: {
    getcontactsInfo: (state, action) => {
      return {
        ...state,
        startContactsInfo: action.payload,
      };
    },
    setchosenContact: (state, action) => {
      return {
        ...state,
        chosenContact: action.payload,
      };
    },
  },
});

export const selectors = {
  loadedContactsInfo: (state: InitialState) => state.startContactsInfo,
  chosenContact: (state: InitialState) => state.chosenContact,
};

export const {
  getcontactsInfo,
  setchosenContact,
} = occasionReducer.actions;

export const { reducer } = occasionReducer;
