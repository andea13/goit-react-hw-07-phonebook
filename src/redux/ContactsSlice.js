import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const deletedIdIndex = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );

        if (deletedIdIndex !== -1) {
          state.contacts = {
            ...state.contacts,
            items: [
              ...state.contacts.items.slice(0, deletedIdIndex),
              ...state.contacts.items.slice(deletedIdIndex + 1),
            ],
          };
        }
      })

      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const ContactsReducer = ContactsSlice.reducer;
export const { setFilter } = ContactsSlice.actions;
