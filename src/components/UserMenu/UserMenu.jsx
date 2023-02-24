import { ContainerWelcome, WelcomeMessage } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUserName);

  const handleChange = () => {
    dispatch(logOut());
  };

  return (
    <ContainerWelcome>
      <WelcomeMessage>Welcome, {user}</WelcomeMessage>
      <Button type="button" onClick={handleChange}>
        Logout
      </Button>
    </ContainerWelcome>
  );
};
