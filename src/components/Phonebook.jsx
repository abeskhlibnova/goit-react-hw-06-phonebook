import ContactForm from './ContactForm';
import ContactList from './ContactList ';
import Filter from './Filter';
import { ContactsTitle, Form, ContactFilterForm } from './Phonebook.styled';
import 'react-toastify/dist/ReactToastify.css';

export default function Phonebook() {
  return (
    <Form>
      <ContactForm />
      <ContactFilterForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </ContactFilterForm>
    </Form>
  );
}
