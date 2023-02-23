import { ContactList } from './ContactList/ContactList';
import { Route, Routes } from 'react-router-dom';
import Form from './ContactForm/Form';
import Filter from './Filter';
import { Container, MainTitle, Title, Message } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getError,
  getIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserMenu } from './UserMenu/UserMenu';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LodInPage';
import ContactPage from 'pages/ContactPage';
import AppBar from './AppBar';

export function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);

  // return (
  //   <Container>
  //     <UserMenu />
  //     <MainTitle>Phonebook</MainTitle>
  //     <Form />
  //     <Title>Contacts</Title>
  //     {contacts.length === 0 ? (
  //       <Message>There is no contacts</Message>
  //     ) : (
  //       <>
  //         <Filter />
  //         <ContactList />
  //       </>
  //     )}
  //     {loading && <Loader />}
  //     <ToastContainer
  //       position="top-center"
  //       autoClose={5000}
  //       closeOnClick
  //       theme="colored"
  //     />
  //   </Container>
  // );

  return (
    <Routes>
      <Route path="/" element={<AppBar />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="contacts" element={<ContactPage />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
}
