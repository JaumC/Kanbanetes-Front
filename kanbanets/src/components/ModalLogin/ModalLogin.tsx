import { FC, useState } from 'react';
import './ModalLogin.css';
import ModalSignUp from '../ModalSignUp/ModalSignUp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isModalSign, setModalSign] = useState(false);
  
  const openModalSign = () => {
    setModalSign(true);
    onClose();
  };
  const closeModalSign = () => {
    setModalSign(false);
      onClose();
  }

  if (!isOpen && !isModalSign) {
    return null;
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <input className='loginInputs' type="text" placeholder='E-mail'/>
        <input className='loginInputs' type="text" placeholder='Password'/>
        <button className='loginButton'>Login</button>
        <div className='signContainer'>
          <p>Don´t have an account?</p>
          <a onClick={openModalSign}>Sign up</a>
        </div>
        <ModalSignUp isSignOpen={isModalSign} onSignClose={closeModalSign}/>
      </div>
    </div>
  );
};

export default ModalLogin;