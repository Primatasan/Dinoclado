import Card from '../Card'
import hexToRgba from 'hex-to-rgba';
import './Clado.css'

const Clado = (props) => {
    return(
        props.dinossauros.length > 0 && <article className='clado' style={{ backgroundColor:hexToRgba(props.cladoColor, 0.4)}}>
            <input onChange={e => props.changeColor(e.target.value, props.id)} value={props.cladoColor} type='color' className='input-color'/>
            <h3 style={{ borderColor:props.cladoColor, color:props.cladoColor}}>{props.nome}</h3>
            <div className='cards'>
                {props.dinossauros.map(dinossauro => 
                    <Card
                        dinossauro={dinossauro}
                        bgColor={props.cladoColor} 
                        key={dinossauro.id} 
                        especie={dinossauro.especie} 
                        familia={dinossauro.familia} 
                        imagem={dinossauro.imagem}
                        deleteDino={props.deleteDino}
                        />
                )}
            </div>
        </article>
    )
}

export default Clado