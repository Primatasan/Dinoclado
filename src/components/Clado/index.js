import Card from '../Card'
import './Clado.css'

const Clado = (props) => {
    return(
        props.dinossauros.length > 0 && <article className='clado' style={{ backgroundColor:props.secundaryColor}}>
            <h3 style={{ borderColor:props.primaryColor}}>{props.nome}</h3>
            <div className='cards'>
                {props.dinossauros.map(dinossauro => <Card bgColor={props.primaryColor} key={dinossauro.especie} especie={dinossauro.especie} familia={dinossauro.familia} imagem={dinossauro.imagem}/>)}
            </div>
        </article>
    )
}

export default Clado