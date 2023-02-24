import { Container, MainTitle, Message, Title } from 'components/App.styled';
import Form from 'components/ContactForm/Form';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/operations';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  getError,
  getIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { getUserName } from 'redux/auth/authSelectors';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const user = useSelector(getUserName);

  useEffect(() => {
    if (user === null) return;
    dispatch(fetchContacts());
  }, [dispatch, user]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);
  return (
    <Container>
      <UserMenu />
      <MainTitle>Phonebook</MainTitle>
      <Form />
      <Title>Contacts</Title>
      {contacts.length === 0 ? (
        <Message>There is no contacts</Message>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {loading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </Container>
  );
};

const ProtectedContactsPage = WithAuthRedirect(ContactPage, '/login');

export default ProtectedContactsPage;
