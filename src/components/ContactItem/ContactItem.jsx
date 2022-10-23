import React from 'react';

export default function ContactItem({ id, name, number, removeContact }) {
  return (
    <li>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <p>{name}</p>
        <p>{number}</p>
        <span
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => removeContact(id)}
        >
          &times;
        </span>
      </div>
    </li>
  );
}
