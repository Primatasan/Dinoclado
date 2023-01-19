import Card from '../Card'
import './Clado.css'

const Clado = (props) => {
    return(
        props.dinossauros.length > 0 && <article className='clado' style={{ backgroundColor:props.secundaryColor}}>
            <input onChange={e => props.changeColor(e.target.value, props.nome)} value={props.primaryColor} type='color' className='input-color'/>
            <h3 style={{ borderColor:props.primaryColor}}>{props.nome}</h3>
            <div className='cards'>
                {props.dinossauros.map(dinossauro => 
                    <Card 
                        colorButton = {props.secundaryColor}
                        bgColor={props.primaryColor} 
                        key={dinossauro.especie} 
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