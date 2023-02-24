import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNavigation/AuthNav';
import Navigation from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      {isLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
