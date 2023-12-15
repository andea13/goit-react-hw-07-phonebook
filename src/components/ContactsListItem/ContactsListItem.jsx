import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactsItemCreatedAt,
  ContactsItemButton,
} from './ContactsListItem.styled';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ createdAt, name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsItem key={id}>
      <ContactsItemName>Name: {name} </ContactsItemName>
      <ContactsItemNumber>Phone: {phone}</ContactsItemNumber>
      <ContactsItemCreatedAt>Created at: {createdAt}: </ContactsItemCreatedAt>
      <ContactsItemButton type="button" onClick={handleDelete}>
        Delete
      </ContactsItemButton>
    </ContactsItem>
  );
};
