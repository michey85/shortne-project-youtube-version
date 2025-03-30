import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/actions/userActions';
import { Form } from './Form';

export const Login = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(loginUser({ email, password }));
    closeModal();
  };

  return <Form handleClick={handleLogin} title="Login" />;
};
