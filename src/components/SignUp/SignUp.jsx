import {Form} from './Form';

export const SignUp = ({closeModal}) => {

    const handleRegister = (email, pass) => {
        closeModal();
    }

    return (
        <Form
            handleClick={handleRegister}
            title="Register"
        />
    )
}
