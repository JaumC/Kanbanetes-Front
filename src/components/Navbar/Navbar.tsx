import './Navbar.css'
import { useState } from "react";
import ModalLogin from '../ModalLogin/ModalLogin';

export function Navbar(){
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return(
        <>
            <nav className='container'>
                <a href="/"><p>Kanbanetes</p></a>
                <div onClick={openModal} className='userIcon'>
                    <img src="../src/assets/UserIcon.svg" alt="" />
                </div>
            </nav>
            <ModalLogin isOpen={isModalOpen} onClose={closeModal}/>
        </>
    )
}