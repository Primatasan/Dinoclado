import './Card.css'

 const Card = ({especie, familia, imagem, bgColor}) => {
    return (
        <div className='card-body'>
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