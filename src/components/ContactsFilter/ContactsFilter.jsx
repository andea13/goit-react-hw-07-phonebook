import { FilterLabel, FilterInput } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/ContactsSlice';
import { selectFilter } from '../../redux/selectors';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={`${filter}`}
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </FilterLabel>
  );
};
