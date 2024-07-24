import { FC } from 'react';
import './ModalLogin.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ModalLogin;