import React from 'react';

export default function AddForm({
  name,
  number,
  handleInput,
  handleAddContact,
}) {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>
        <input type="text" name="name" value={name} onChange={handleInput} />
        Name
      </label>
      <label>
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleInput}
        />
        Number
      </label>
      <button
        type="button"
        onClick={handleAddContact}
        style={{ width: '200px' }}
      >
        Add contact
      </button>
    </form>
  );
}
