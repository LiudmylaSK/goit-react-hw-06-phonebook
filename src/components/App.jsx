
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { SearchFilter } from './SearchFilter/SearchFilter';

import { MdContactPhone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

import css from './App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>
        <MdContactPhone className={css.iconContact} />
        Phonebook
      </h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>

      <SearchFilter />

      {contacts.length ? (
        <ContactsList />
      ) : (
        <p className={css.noContactsText}>
          There are no contacts in your Phonebook yet. Create the first one
        </p>
      )}
    </div>
  );
};

export default App;


