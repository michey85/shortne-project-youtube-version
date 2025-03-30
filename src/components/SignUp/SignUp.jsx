import { useDispatch } from 'react-redux';

import { createUser } from '../../store/actions/userActions';
import { Form } from './Form';

export const SignUp = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleRegister = (email, pass) => {
    dispatch(createUser({ email, password: pass }));
    closeModal();
  };

  return <Form handleClick={handleRegister} title="Register" />;
};
