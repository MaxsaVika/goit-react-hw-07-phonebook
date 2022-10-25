import ContactsList from './ContactsList/ContactsList';
import AddForm from './AddForm/AddForm';
import { useSelector } from 'react-redux';
import { FilterContact } from './FilterContact/FilterContact';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>MY PHONEBOOK</h1>
      <AddForm />
      <FilterContact />
      {contacts.length > 0 ? (
        <ContactsList contacts={filteredContacts} />
      ) : (
        <p>No Contact at List</p>
      )}
    </div>
  );
};
