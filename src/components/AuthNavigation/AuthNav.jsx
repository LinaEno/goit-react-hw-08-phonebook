import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="register">Регистрация</NavLink>
      <NavLink to="login">Логин</NavLink>
    </div>
  );
}
