import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';

export default function ContactsList({ removeContact }) {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <ol>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          {...contact}
          removeContact={removeContact}
        />
      ))}
    </ol>
  );
}
