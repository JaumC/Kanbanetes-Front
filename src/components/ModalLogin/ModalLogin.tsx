import { FC, useState } from 'react';
import './ModalLogin.css';
import api from '../../axiosConfig';
import ModalSignUp from '../ModalSignUp/ModalSignUp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isModalSign, setModalSign] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const openModalSign = () => {
    setModalSign(true);
    onClose();
  };
  const closeModalSign = () => {
    setModalSign(false);
      onClose();
  }

  const signIn = async () => {
    try{
      const response = await api.post('/signin/', {
        email,
        password,
      })
      console.log('Sucesso: ', response.data)
      onClose();
      if(response){
        window.location.href = '/boards'   
       }
      }catch (error){
        console.error('Erro: ', error)
      }
    }

  if (!isOpen && !isModalSign) {
    return null;
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <input className='loginInputs' type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='loginInputs' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn} className='loginButton'>Login</button>
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