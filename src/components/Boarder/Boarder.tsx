import { Cards } from '../Cards/Cards'
import './Boarder.css'

export function Boarder(){
    return(
        <div className='boardsContainer'>
            <div className='main'> 
                <h1>Boards</h1>
                <div className='board'>
                    <Cards />
                    <Cards />
                </div>
            </div>
        </div>
    )
}