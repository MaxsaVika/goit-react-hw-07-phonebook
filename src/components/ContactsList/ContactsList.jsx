import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import React from 'react';

export default function ContactsList({ contacts }) {
  return (
    <ol style={{ paddingLeft: '20px', margin: '0' }}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ol>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
