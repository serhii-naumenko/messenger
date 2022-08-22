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
  queryForSearch: string,
}

const initialState: InitialState = {
  startContactsInfo: [...contactsStart],
  chosenContact: startContactsInfo[1],
  queryForSearch: '',
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
    setQueryForSearch: (state, action) => {
      return {
        ...state,
        queryForSearch: action.payload,
      };
    },
  },
});

export const selectors = {
  loadedContactsInfo: (state: InitialState) => state.startContactsInfo,
  chosenContact: (state: InitialState) => state.chosenContact,
  queryForSearch: (state: InitialState) => state.queryForSearch,
};

export const {
  getcontactsInfo,
  setchosenContact,
  setQueryForSearch,
} = occasionReducer.actions;

export const { reducer } = occasionReducer;
