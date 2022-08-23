import { createSlice } from '@reduxjs/toolkit';
import { OneContactInfo } from '../OneContactInfoType';
import { startContactsInfo } from '../StartContacts.json';

const contactsInfoFromStorage = localStorage.getItem('contacts');
let contactsStart: OneContactInfo[] = startContactsInfo;

if (contactsInfoFromStorage !== null) {
  contactsStart = JSON.parse(contactsInfoFromStorage);
}

const chosenContactFromStorage = localStorage.getItem('chosenContact');
let oneContactStart: OneContactInfo = startContactsInfo[0];

if (chosenContactFromStorage !== null) {
  oneContactStart = JSON.parse(chosenContactFromStorage);
}

interface InitialState {
  contactsInfo: OneContactInfo[],
  chosenContact: OneContactInfo,
  queryForSearch: string,
  answerFromChack: string,
}

const initialState: InitialState = {
  contactsInfo: [...contactsStart],
  chosenContact: oneContactStart,
  queryForSearch: '',
  answerFromChack: '',
};

const occasionReducer = createSlice({
  name: 'contactInao',
  initialState,
  reducers: {
    setcontactsInfo: (state, action) => {
      return {
        ...state,
        contactsInfo: action.payload,
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
    setAnswerFromChack: (state, action) => {
      return {
        ...state,
        answerFromChack: action.payload,
      };
    },
  },
});

export const selectors = {
  loadedContactsInfo: (state: InitialState) => state.contactsInfo,
  chosenContact: (state: InitialState) => state.chosenContact,
  queryForSearch: (state: InitialState) => state.queryForSearch,
  answerFromChack: (state: InitialState) => state.answerFromChack,
};

export const {
  setcontactsInfo,
  setchosenContact,
  setQueryForSearch,
  setAnswerFromChack,
} = occasionReducer.actions;

export const { reducer } = occasionReducer;
