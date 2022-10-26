import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import css from './AddForm.module.css';

export default function AddForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const options = { name: setName, number: setNumber };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onAddContact = e => {
    e.preventDefault();

    if (onCheckupContact(name)) {
      return alert(`${name} is already in contacts `);
    }
    if (onCheckupContact(number)) {
      return alert(`Tel.number ${number} is already in contacts `);
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

  const onCheckupContact = value => {
    const res = contacts.find(
      contact => contact.name === value || contact.number === value
    );
    return res;
  };

  return (
    <form className={css.form} onSubmit={onAddContact}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        value={name}
        onChange={onChange}
      />

      <input
        className={css.formInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Tel"
        value={number}
        onChange={onChange}
      />

      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
