import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {filteredContacts &&
        filteredContacts.map(({ createdAt, name, phone, id }) => (
          <ContactsListItem
            createdAt={createdAt}
            name={name}
            phone={phone}
            key={id}
            id={id}
          />
        ))}
    </ContactList>
  );
};
