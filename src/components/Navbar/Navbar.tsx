import './Navbar.css'
import { useEffect, useState } from "react";
import ModalLogin from '../ModalLogin/ModalLogin';
import Account from '../Account/Account';

export function Navbar(){
    const [isModalOpen, setModalOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const openProfile = () => setProfileOpen(true);
    const closeProfile = () => setProfileOpen(false);

    const handleLogin = () => {
        setIsLogged(true)
        closeModal();
    }

    useEffect(() => {
        const authtoken = localStorage.getItem('authToken');
        if(authtoken){
            setIsLogged(true)
        }else{
            localStorage.removeItem('authToken')
        }
    }, [])

    return (
        <>
            <nav className='container'>
                {isLogged ? (
                    <>
                        <a href="/boards"><p>Kanbanetes</p></a>
                        <a onClick={openProfile} className='userIcon'>
                            <img src="../src/assets/UserIcon.svg" alt="User Icon" />
                        </a>
                        {isProfileOpen && <Account isProfile={isProfileOpen} onCloseProfile={closeProfile} />}
                    </>
        
                    ) : (
                        <>
                            <a href="/"><p>Kanbanetes</p></a>
                            <div onClick={openModal} className='userIcon'>
                                <img src="../src/assets/UserIcon.svg" alt="User Icon" />
                            </div>
                            
                        </>
                    )}
            </nav>
            <ModalLogin isOpen={isModalOpen} onClose={closeModal} onLogin={handleLogin} />
        </>
    );
}

