import cn from 'classnames';
import classes from './Button.module.scss';

export const Button = ({
  onClick,
  className = '',
  variant = '',
  size = 'medium',
  type = 'button',
  children,
}) => {
  const mainCn = cn(classes.button, classes[size], classes[variant], className);

  return (
    <button className={mainCn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
