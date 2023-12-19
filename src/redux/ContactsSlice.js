import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  handlePending,
  handleRejected,
  handleFetchAllContactsFullfilled,
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
} from './handleActionFunctions';
import { defaultStatus } from './constants';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const { pending, rejected } = defaultStatus;

const customArray = [fetchContacts, addContact, deleteContact];

const mapCustomArray = status => {
  return customArray.map(el => el[status]);
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchAllContactsFullfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(isAnyOf(...mapCustomArray(pending)), handlePending)
      .addMatcher(isAnyOf(...mapCustomArray(rejected)), handleRejected);
  },
});

export const ContactsReducer = ContactsSlice.reducer;
export const { setFilter } = ContactsSlice.actions;
