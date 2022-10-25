import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },

    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
