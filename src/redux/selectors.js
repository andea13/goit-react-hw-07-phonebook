import { createSelector } from 'reselect';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
