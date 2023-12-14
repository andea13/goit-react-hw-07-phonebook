import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65774291197926adf62dd1af.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, thunkAPI) => {
    const contactToAdd = {
      name: payload.name,
      phone: payload.number,
      id: nanoid(),
    };

    const options = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    try {
      const response = await axios.post('/contacts', contactToAdd, options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (payload, thunkAPI) => {
    const options = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      data: payload,
    };

    try {
      const response = await axios.delete('/contacts/:`${id}`', options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
