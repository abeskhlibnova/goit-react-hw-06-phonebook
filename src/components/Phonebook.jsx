import ContactForm from './ContactForm';
import ContactList from './ContactList ';
import Filter from './Filter';
import { PhonebookTitle, ContactsTitle } from './Phonebook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

export default function Phonebook() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addPhoneContact = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const removePhoneContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    return result;
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  };

  return (
    <div>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addPhoneContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={getFilteredContacts()}
        removeContact={removePhoneContact}
      />
    </div>
  );
}
