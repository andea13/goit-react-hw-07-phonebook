import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {contacts &&
        contacts
          .filter(
            ({ name }) =>
              name && name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ createdAt, name, phone, id }) => (
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
