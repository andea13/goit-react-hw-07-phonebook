import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactsItemButton,
} from './ContactsListItem.styled';
import { deleteContact } from '../../redux/ContactsSlice';
import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactsItem>
      <ContactsItemName>{name}: </ContactsItemName>
      <ContactsItemNumber>{number}</ContactsItemNumber>
      <ContactsItemButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ContactsItemButton>
    </ContactsItem>
  );
};
