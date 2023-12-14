import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from '../redux/ContactsSlice';

export const store = configureStore({
  reducer: ContactsReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export let persistor = persistStore(store);
