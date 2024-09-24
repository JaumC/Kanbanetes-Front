import { Navbar } from "../components/Navbar/Navbar";
import { Cards } from '../components/Cards/Cards';
import './pageStyles/Boarder.css';

export function Boards(){
    return(
        <>
            <Navbar/>
            <div className='boardsContainer'>
                <div className='main'> 
                    <h1>Boards</h1>
                    <div className='board'>
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    )
}