// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../../src/redux/contactsSlice';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

// import css from './ContactsListItem.module.css'

// export const ContactsListItem = ({ name, number, id }) => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <li key={id} className={css.listItem}>
//       {name}: {number}
//         <button
//           className={css.buttonDeleteItem}
//           type='button'
//           onClick={() => dispatch(deleteContact(id))}
//       >
//         Delete
//       </button>
//     </li>
//     </>
//   );
// };


// Notify.init({
//   borderRadius: '10px',
//   position: 'center-top',
//   width: '300px',
//   timeout: 4000,
//   clickToClose: true,
//   cssAnimationStyle: 'zoom',
//   info: {
//     background: '#f2e230',
//     textColor: '#00f',
//   },
// });


import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import css from './ContactsListItem.module.css';


Notify.init({
  borderRadius: '10px',
  position: 'center-top',
  width: '300px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
  info: {
    background: '#f2e230',
    textColor: '#00f',
  },
});

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.listItem}>
      {name}: {number}
      <button
        className={css.buttonDeleteItem}
        type='button'
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

