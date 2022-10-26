import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem}>
      <div className={css.listItemWrapper}>
        <p>{name}</p>
        <p>{number}</p>
        <span
          className={css.listItemDelBtn}
          onClick={() => dispatch(removeContact(id))}
        >
          &times;
        </span>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
