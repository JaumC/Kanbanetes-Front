import { FC, useState } from 'react';
import './ModalSignUp.css'
import api from '../../axiosConfig';
import { redirect } from 'react-router-dom';

interface ModalSignProps{
    isSignOpen: boolean;
    onSignClose: () => void;
}

const ModalSignUp: FC<ModalSignProps> = ({isSignOpen, onSignClose}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setpasswordConfirmation] = useState('');

    const signUp = async () => {
        try{
            const response = await api.post('/signup/', {
                firstName,
                lastName,
                email,
                emailConfirmation,
                password,
                passwordConfirmation,
            });
            console.log('Sucesso: ', response.data)
            onSignClose();
            
        } catch (error){
            console.error('Erro: ', error)
        }
    }

    if (!isSignOpen){
        return null;
    }

    return(
        <div className="modalSignOverlay" onClick={onSignClose}>
            <div className="modalSignContent" onClick={(e) => e.stopPropagation()}>
                <h2>Sign up</h2>
                <div className='space'>
                    <input className='signUpInputs' type="text" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <input className='signUpInputs' type="text" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='space'>
                    <input className='signUpInputs' type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='signUpInputs' type="text" placeholder='E-mail Confirmation' value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)}/>
                </div>
                <div className='space'>
                    <input className='signUpInputs' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input className='signUpInputs' type="text" placeholder='Password Confirmation' value={passwordConfirmation} onChange={(e) => setpasswordConfirmation(e.target.value)}/>
                </div>
                <button onClick={signUp} className='signUpButton'>Sign up</button>
            </div>
        </div>
    )
}

export default ModalSignUp;