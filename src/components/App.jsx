import ContactsList from './ContactsList/ContactsList';
import AddForm from './AddForm/AddForm';
import { useSelector } from 'react-redux';
import { FilterContact } from './FilterContact/FilterContact';
import { getFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import css from 'components/styles.module.css';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const filteredContacts = () =>
    data
      .filter(
        ({ name, phone }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
          phone.includes(filter)
      )
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );

  return (
    <section className={css.section}>
      <div>
        <h1 className={css.sectionTitle}>MY PHONEBOOK</h1>
        <AddForm />
        <FilterContact />
      </div>

      {data ? (
        <ContactsList contacts={filteredContacts()} />
      ) : (
        <p>No Contact at List</p>
      )}

      {isLoading && <Loader />}
      {error && <p>...ERROR</p>}
    </section>
  );
};
