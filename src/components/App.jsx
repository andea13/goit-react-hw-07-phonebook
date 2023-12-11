import PhonebookForm from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from '../components/ContactsFilter/ContactsFilter';
import {
  PhonebookTitle,
  PhonebookContainer,
  ContactsContainer,
  ContactsTitle,
} from './App.styled';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <PhonebookForm />
      </PhonebookContainer>
      <ContactsContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsFilter />
        <ContactsList />
      </ContactsContainer>
    </div>
  );
};

export default App;
