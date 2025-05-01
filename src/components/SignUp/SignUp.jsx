import { useDispatch } from 'react-redux';

import { createUser } from '../../store/actions/userActions';
import { Form } from './Form';

export const SignUp = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    dispatch(createUser({ email, password })).then((res) => {
      if (res.payload?.ok) {
        closeModal();
      } else {
        alert(res.payload?.result.message || 'SignUp failed');
      }
    });
  };

  return <Form handleClick={handleRegister} title="Register" />;
};
