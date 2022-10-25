import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function AddForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const options = { name: setName, number: setNumber };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onAddContact = () => {
    if (onCheckupContact(name)) {
      return alert(`${name} is already in contacts `);
    }

    if (name.trim().length & number.trim().length) {
      dispatch(addContact({ name, number }));
    }

    setName('');
    setNumber('');
  };

  const onChange = ({ target: { name, value } }) => {
    options[name](value);
  };

  const onCheckupContact = newName => {
    const res = contacts.find(contact => contact.name === newName);
    return res;
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>
        <input
          style={{ marginRight: '5px', height: '20px' }}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
        />
        Name
      </label>

      <label>
        <input
          style={{ marginRight: '5px', height: '20px' }}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChange}
        />
        Number
      </label>

      <button
        type="button"
        onClick={onAddContact}
        style={{ width: '200px', height: '24px' }}
      >
        Add contact
      </button>
    </form>
  );
}
