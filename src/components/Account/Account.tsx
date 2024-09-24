import api from '../../axiosConfig';
import './Account.css';
import { FC, useEffect, useState } from 'react';

interface ProfileProps {
    isProfile: boolean;
    onCloseProfile: () => void;
}

interface User {
    first_name: string;
    last_name: string;
    email: string;
    profileImage: string;
}

const Account: FC<ProfileProps> = ({ isProfile, onCloseProfile }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const profile = async () => {
            try {
                const token = localStorage.getItem('authToken');
                console.log('Token:', token); 

                const response = await api.get('/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data);
                setIsLogged(true);
            
                console.log('No token found'); 
                setIsLogged(false);
                
            } catch (error) {
                console.error('Erro na requisição:', error); 
                setIsLogged(false);
            }
        };

        profile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLogged(false);
        window.location.href = '/';
    };

    if (!isProfile || !user) {
        return null;
    }

    return (
        <div className='modalProfile' onClick={onCloseProfile}>
            <div className='profileContent' onClick={(e) => e.stopPropagation()}>
                <h2>Profile</h2>
                <div className='infoProfile'>
                    <div className='imageProfile'>
                        <img src={user.profileImage || "src/assets/AddTask.svg"} alt="" />                
                        <button className='changePass'>
                            <p>Trocar Senha</p>
                        </button>
                    </div>
                    <div className='name-mail'>
                        <div className='name'>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <img src="src/assets/EditIcon.svg" alt="" />
                        </div>
                        <div className='mail'>
                            <p>{user.email}</p>
                            <img src="src/assets/EditIcon.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='actionButtons'>
                    <button className='deleteButton'>
                        <img src="src/assets/Exclude.svg" alt="" />
                        <p>Excluir Conta</p>
                    </button>
                    <button className='logout' onClick={handleLogout}>
                        <img src="src/assets/ExitIcon.svg" alt="" />
                        <p>Sair</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
