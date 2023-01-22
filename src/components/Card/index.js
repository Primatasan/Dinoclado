import {AiFillCloseCircle} from 'react-icons/ai'
import './Card.css'

 const Card = (props) => {
    return (
        <div className='card-body'>
            <AiFillCloseCircle 
                size={35} 
                className='close-button' 
                onClick={() => props.deleteDino(props.dinossauro.id)}  
            />
            <div className='card-head' style={{backgroundColor: props.bgColor}}>
                <img src={props.imagem} alt={props.especie}/>
            </div>
            <div className='card-info'>
                <h4 style={{color:props.bgColor}}>{props.especie}</h4>
                <p>{props.familia}</p>
            </div>
        </div>
    )
 }

 export default Card