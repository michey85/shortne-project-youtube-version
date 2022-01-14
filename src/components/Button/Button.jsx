import cn from 'classnames';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'square', 'link']),
    type: PropTypes.oneOf(['button', 'submit']),
    size: PropTypes.oneOf(['medium', 'large']),
    children: PropTypes.node,
    onClick: PropTypes.func,
}
