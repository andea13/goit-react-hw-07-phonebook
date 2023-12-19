export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const handleFetchAllContactsFullfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = [...state.contacts.items, action.payload];
};

export const handleDeleteContactFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  const deletedIdIndex = state.contacts.items.findIndex(
    contact => contact.id === action.payload.id
  );

  if (deletedIdIndex !== -1) {
    state.contacts.items.splice(deletedIdIndex, 1);
  }
};
