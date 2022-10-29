import React from 'react';
import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, phone }) {
  const [removeContact] = useRemoveContactMutation();

  return (
    <tr key={id} className={css.contact_item}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <span className={css.listItemDelBtn} onClick={() => removeContact(id)}>
          &times;
        </span>
      </td>
    </tr>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
