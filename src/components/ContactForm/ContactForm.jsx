import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';


    export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

   
      
  const handleSubmit = event => {
    event.preventDefault();



    const contactExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (contactExist) {
      alert(`${name} is already in your contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

      
      
const handleChange = ({ target: { name, value } }) => {
  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
      break;
  }
};



  return (
    <>
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.labelName}>
        Name
        <input
          className={css.inputName}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          placeholder="Enter name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <label className={css.labelTel}>
        Number
        <input
          className={css.inputTel}
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
          placeholder="Enter number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>
      <button className={css.buttonAddContact} type="submit">
        Add contact
      </button>
      </form>
    </>
  );
};
