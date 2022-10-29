import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useAddContactMutation } from 'redux/contactsSlice';
import css from './AddForm.module.css';

export default function AddForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const options = { name: setName, phone: setPhone };

  const { data } = useGetContactsQuery();

  const [addContact, { isLoading }] = useAddContactMutation();

  const onAddContact = e => {
    e.preventDefault();

    if (onCheckupContact(name)) {
      return alert(`${name} is already in contacts `);
    }
    if (onCheckupContact(phone)) {
      return alert(`Tel.number ${phone} is already in contacts `);
    }
    if (name.trim().length & phone.trim().length) {
      addContact({ name, phone });
    }

    setName('');
    setPhone('');
  };

  const onChange = ({ target: { name, value } }) => {
    options[name](value);
  };

  const onCheckupContact = value => {
    const res = data.find(
      contact => contact.name === value || contact.phone === value
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
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />

      <button className={css.formBtn} type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'Add contact'}
      </button>
    </form>
  );
}
