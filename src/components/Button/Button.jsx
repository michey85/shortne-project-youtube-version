import {forwardRef} from 'react';
import cn from 'classnames';
import {motion} from 'framer-motion';
import classes from './Button.module.scss';

export const Button = forwardRef(({onClick, variant = '', size = 'medium', type = 'button', children}, ref) => {
    const mainCn = cn(
        classes.button,
        classes[size],
        classes[variant],
    );

    return (
        <button
            ref={ref}
            className={mainCn}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
})

export const MButton = motion(Button);
