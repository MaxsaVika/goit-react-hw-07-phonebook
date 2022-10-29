import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactsList.module.css';

export default function ContactsList({ contacts }) {
  return (
    <table className={css.tablWrapper}>
      <thead className={css.tablHeader}>
        <tr>
          <th className={css.tablSubTitle}>Name</th>
          <th className={css.tablSubTitle}>Phone</th>
          <th className={css.tablSubTitle}>Delete</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </tbody>
    </table>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
