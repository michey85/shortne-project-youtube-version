import {Button} from './Button';
import 'index.css';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант внешнего вида кнопки',
            defaultValue: 'primary',
            options: ['primary', 'square', 'link'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: 'string',
            description: 'Вариант размера кнопки',
            defaultValue: 'medium',
            options: ['medium', 'large'],
            control: {
                type: 'radio'
            }
        },
        type: {
            type: 'string',
            description: 'Тип кнопки',
            defaultValue: 'button',
            options: ['button', 'submit'],
            control: {
                type: 'radio'
            }
        },
        children: {
            type: 'string',
            name: 'label',
            defaultValue: 'Click me'
        }
    },
}

const Template = (arg) => <Button {...arg} />

export const Default = Template.bind({});
Default.args = {
    children: 'Press me',
    variant: 'primary'
};

export const Large = Template.bind({});
Large.args = {
    children: 'Press me',
    size: 'large'
}

export const Link = Template.bind({});
Link.args = {
    children: 'Juast a link',
    variant: 'link'
}

export const Square = Template.bind({});
Square.args = {
    children: 'Juast a square',
    variant: 'square'
}