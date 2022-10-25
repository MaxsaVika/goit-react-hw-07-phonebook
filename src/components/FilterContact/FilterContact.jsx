import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import css from './FilterContact.module.css';

export const FilterContact = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onHandleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.find_wrapper}>
      <label className={css.find_label} htmlFor="filter">
        {' '}
        Find contacts by name
      </label>
      <input
        id="filter"
        className={css.find_input}
        type="text"
        placeholder="Name // number"
        value={filter}
        name="filter"
        onChange={onHandleChange}
      />
    </div>
  );
};
