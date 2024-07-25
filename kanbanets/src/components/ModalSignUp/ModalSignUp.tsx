import { FC } from 'react';
import './ModalSignUp.css'

interface ModalSignProps{
    isSignOpen: boolean;
    onSignClose: () => void;
}

const ModalSignUp: FC<ModalSignProps> = ({isSignOpen, onSignClose}) => {
    if (!isSignOpen){
        return null;
    }

    return(
        <div className="modalSignOverlay" onClick={onSignClose}>
            <div className="modalSignContent" onClick={(e) => e.stopPropagation()}>
                <h2>Sign up</h2>
                <div className='space'>
                    <input className='signUpInputs' type="text" placeholder='First name'/>
                    <input className='signUpInputs' type="text" placeholder='Last name'/>
                </div>
                <div className='space'>
                    <input className='signUpInputs' type="text" placeholder='E-mail'/>
                    <input className='signUpInputs' type="text" placeholder='E-mail Confirmation'/>
                </div>
                <div className='space'>
                    <input className='signUpInputs' type="text" placeholder='Password'/>
                    <input className='signUpInputs' type="text" placeholder='Password Confirmation'/>
                </div>
                <button className='signUpButton'>Sign up</button>
            </div>
        </div>
    )
}

export default ModalSignUp;