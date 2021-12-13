import cn from 'classnames';
import classes from './Button.module.scss';

export const Button = ({onClick, variant = '', size = 'medium', type = 'button', children}) => {
    const mainCn = cn(
        classes.button,
        classes[size],
        classes[variant],
    );

    return (
        <button
            className={mainCn}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
