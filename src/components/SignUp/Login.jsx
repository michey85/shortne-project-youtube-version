import {Form} from './Form';

export const Login = ({closeModal}) => {

    const handleLogin = (email, pass) => {
        closeModal();
    }

    return (
        <Form
            handleClick={handleLogin}
            title="Login"
        />
    )
}
