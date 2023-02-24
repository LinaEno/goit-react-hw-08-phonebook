import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LogInPage';
import ProtectedContactsPage from 'pages/ContactPage';
import AppBar from './AppBar';
import { toast } from 'react-toastify';
import HomePage from 'pages/HomePage';

export function App() {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ProtectedContactsPage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
}
