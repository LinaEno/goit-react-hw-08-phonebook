import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNavigation/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <AuthNav />
        </>
      )}
    </header>
  );
}
