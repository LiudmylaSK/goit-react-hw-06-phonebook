import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filterContacts } from '../../redux/filterSlice';

import css from './SearchFilter.module.css';

export const SearchFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterContacts = ({ currentTarget: { value } }) => {
    dispatch(filterContacts(value.toLowerCase()));
  };

  return (
    <label className={css.labelFilter}>
      Find contacts by name
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={onFilterContacts}
        placeholder="Filter by name..."
      />
    </label>
  );
};
