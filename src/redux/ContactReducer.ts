import { createSlice } from '@reduxjs/toolkit';
import { OneContactInfo } from '../OneContactInfoType';
import { startContactsInfo } from '../StartContacts.json';

const contactsInfoFromStorage = localStorage.getItem('contacts');
let contactsStart: OneContactInfo[] = startContactsInfo;

if (contactsInfoFromStorage !== null) {
  contactsStart = JSON.parse(contactsInfoFromStorage);
}

const startUser = localStorage.getItem('user');
let lastuser = {
  email: null,
  token: null,
  id: null,
};

if (startUser !== null) {
  lastuser = JSON.parse(startUser);
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
  user: {
    email: string | null,
    token: string | null,
    id: string | null,
  },
  isFirastDisplay: boolean,
}

const initialState: InitialState = {
  contactsInfo: [...contactsStart],
  chosenContact: oneContactStart,
  queryForSearch: '',
  answerFromChack: '',
  user: lastuser,
  isFirastDisplay: true,
};

const contactReducer = createSlice({
  name: 'contactInfo',
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
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    removeUser: (state) => {
      return {
        ...state,
        user: {
          email: null,
          token: null,
          id: null,
        },
      };
    },
    setIsFirstDisplay: (state, action) => {
      return {
        ...state,
        isFirastDisplay: action.payload,
      };
    },
  },
});

export const selectors = {
  loadedContactsInfo: (state: InitialState) => state.contactsInfo,
  chosenContact: (state: InitialState) => state.chosenContact,
  queryForSearch: (state: InitialState) => state.queryForSearch,
  answerFromChack: (state: InitialState) => state.answerFromChack,
  getUser: (state: InitialState) => state.user,
  getIsFirstDisplay: (state: InitialState) => state.isFirastDisplay,
};

export const {
  setcontactsInfo,
  setchosenContact,
  setQueryForSearch,
  setAnswerFromChack,
  setUser,
  removeUser,
  setIsFirstDisplay,
} = contactReducer.actions;

export const { reducer } = contactReducer;
