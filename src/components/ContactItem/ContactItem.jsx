import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li style={{ paddingBottom: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <p>{name}</p>
        <p>{number}</p>
        <span
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => dispatch(removeContact({ id }))}
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
