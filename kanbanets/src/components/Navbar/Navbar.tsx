import style from './Navbar.module.css'
import { useState } from "react";
import ModalLogin from '../ModalLogin/ModalLogin';

export function Navbar(){
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return(
        <>
            <nav className={style.container}>
                <p>Kanbanetes</p>
                <div onClick={openModal} className={style.userIcon}>
                    <img src="../src/assets/UserIcon.svg" alt="" />
                </div>
            </nav>
            <ModalLogin isOpen={isModalOpen} onClose={closeModal}/>
        </>
    )
}