import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';

import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
