import { useState } from 'react';

import { Button } from '../Button';
import classes from './Form.module.scss';

const Form = ({ handleClick, title }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className={classes.form}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button onClick={() => handleClick(email, pass)}>{title}</Button>
    </div>
  );
};

export { Form };
