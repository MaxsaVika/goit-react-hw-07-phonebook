import { useState } from 'react';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './AddForm/AddForm';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const options = { name: setName, number: setNumber };

  const dispatch = useDispatch();

  const onAddContact = () => {
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const onChange = ({ target: { name, value } }) => {
    options[name](value);
  };

  return (
    <div>
      <h1>MY PHONEBOOK</h1>
      <AddForm
        name={name}
        number={number}
        handleInput={onChange}
        handleAddContact={onAddContact}
      />
      <ContactsList />
    </div>
  );
};
