import ContactsList from './ContactsList/ContactsList';
import AddForm from './AddForm/AddForm';
import { useSelector } from 'react-redux';
import { FilterContact } from './FilterContact/FilterContact';
import { getContacts, getFilter } from 'redux/selectors';
import css from 'components/styles.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter)
  );

  const sortContactsByName = () =>
    filteredContacts.sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );

  return (
    <section className={css.section}>
      <h1 className={css.sectionTitle}>MY PHONEBOOK</h1>
      <AddForm />
      <FilterContact />
      {contacts.length > 0 ? (
        <ContactsList contacts={sortContactsByName()} />
      ) : (
        <p>No Contact at List</p>
      )}
    </section>
  );
};
