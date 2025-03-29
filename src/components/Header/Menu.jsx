import { useDispatch, useSelector } from 'react-redux';

import { logoutUser, selectUser } from '../../store/slice/userSlice';
import { Button } from '../Button';
import classes from './Menu.module.scss';

export const Menu = ({ links = [], handleSignup, handleLogin }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={classes.menu}>
      <div className={classes.pages}>
        {links.map((link) => (
          <a href={link.url} key={link.text} className={classes.link}>
            {link.text}
          </a>
        ))}
      </div>
      <div className={classes.login}>
        {Boolean(user) ? (
          <Button onClick={handleLogOut}>Log out</Button>
        ) : (
          <>
            <Button variant="link" onClick={handleLogin}>
              Login
            </Button>
            <Button onClick={handleSignup}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  );
};
