import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import AppBar from './AppBar';
import { toast } from 'react-toastify';
import { selectRefreshed } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LogInPage'));
const ProtectedContactsPage = lazy(() => import('pages/ContactPage'));
const PageNotFound404 = lazy(() => import('pages/Page404'));

export function App() {
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshed);

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
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ProtectedContactsPage />} />
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}
