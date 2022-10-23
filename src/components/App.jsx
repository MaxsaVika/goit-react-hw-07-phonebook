import { nanoid } from 'nanoid';
import { useState } from 'react';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './AddForm/AddForm';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const options = { name: setName, number: setNumber };

  const addContact = () => {
    if (name.trim().length & number.trim().length) {
      setContacts([
        ...contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ]);
    }
    setName('');
    setNumber('');
  };

  const onChange = ({ target: { name, value } }) => {
    options[name](value);
  };

  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <div>
      <h1>MY PHONEBOOK</h1>
      <AddForm
        name={name}
        number={number}
        handleInput={onChange}
        addContact={addContact}
      />
      <ContactsList contacts={contacts} removeContact={removeContact} />
    </div>
  );
};
