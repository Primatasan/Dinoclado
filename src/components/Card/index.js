import {AiFillCloseCircle} from 'react-icons/ai'
import './Card.css'

 const Card = ({especie, familia, imagem, bgColor,deleteDino}) => {
    return (
        <div className='card-body'>
            <AiFillCloseCircle size={35} className='close-button' onClick={deleteDino} style={{color:"#00000"}} />
            <div className='card-head' style={{backgroundColor: bgColor}}>
                <img src={imagem} alt={especie}/>
            </div>
            <div className='card-info'>
                <h4 style={{color:bgColor}}>{especie}</h4>
                <p>{familia}</p>
            </div>
        </div>
    )
 }

 export default Card