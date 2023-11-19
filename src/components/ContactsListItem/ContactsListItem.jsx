import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactsListItem.module.css';

export const handleDeleteContact = (dispatch, id) => {
  dispatch(deleteContact(id));
};

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = useCallback(() => {
    handleDeleteContact(dispatch, id);
  }, [dispatch, id]);

  return (
    <li key={id} className={css.listItem}>
      {name}: {number}
      <button
        className={css.buttonDeleteItem}
        type="button"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </li>
  );
};




