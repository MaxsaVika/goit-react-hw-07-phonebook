import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactsList.module.css';

export default function ContactsList({ contacts }) {
  return (
    <>
      <h2 className={css.listTitle}>Contacts List</h2>
      <ol className={css.list}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ol>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
