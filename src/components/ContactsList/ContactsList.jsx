import ContactItem from 'components/ContactItem/ContactItem';
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
