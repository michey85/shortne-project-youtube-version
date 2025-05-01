import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/actions/userActions';
import { Form } from './Form';

export const Login = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(loginUser({ email, password })).then((res) => {
      if (res.payload?.ok) {
        closeModal();
      } else {
        alert(res.payload?.result.message || 'Login failed');
      }
    });
  };

  return <Form handleClick={handleLogin} title="Login" />;
};
