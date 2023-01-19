import {AiFillCloseCircle} from 'react-icons/ai'
import './Card.css'

 const Card = ({especie, familia, imagem, colorButton, bgColor,deleteDino}) => {
    return (
        <div className='card-body'>
            <AiFillCloseCircle size={35} className='close-button' onClick={deleteDino} style={{color:colorButton}} />
            <div className='card-head' style={{backgroundColor: bgColor}}>
                <img src={imagem} alt={especie}/>
            </div>
            <div className='card-info'>
                <h4>{especie}</h4>
                <p>{familia}</p>
            </div>
        </div>
    )
 }

 export default Card