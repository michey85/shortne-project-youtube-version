import classes from './Input.module.scss';

export const Input = ({ className, ...props }) => {
  return <input className={`${classes.input} ${className}`} {...props} />;
};
