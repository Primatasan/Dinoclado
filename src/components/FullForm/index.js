import { useState } from "react"
import FormButton from "../FormButton"
import FormField from "../FormField"
import FormList from "../FormList"
import { v4 as uuidv4} from 'uuid';

import "./FullForm.css"



const FullForm = (props) => {

    const [especie,setEspecie] = useState('')
    const [familia,setFamilia] = useState('')
    const [imagem,setImagem] = useState('')
    const [clado,setClado] = useState('')
    const [id,setId] = useState('')

    const buttonSubmit = (event) => {
        event.preventDefault()
        props.addDino({
            especie,
            familia,
            imagem,
            clado,
            id
        })
        setImagem ('')
        setFamilia('')
        setEspecie('')
        setClado('')
        setId(uuidv4())
    }
    

    return(
        <div className="form_box">
            <form onSubmit={buttonSubmit}>
                <h2>Preencha os dados para criar o card do dinossauro.</h2>
                <FormField 
                    requiredStatus={true} 
                    label="Espécie" 
                    placeholder="Digite a espécie do dinossauro"
                    typeValue = {especie}
                    Auteration={e => setEspecie(e)}
                />
                <FormField 
                    requiredStatus={true} 
                    label="Família" 
                    placeholder="Digite a família do dinossauro"
                    typeValue = {familia}
                    Auteration={e => setFamilia(e)}
                />
                <FormField 
                    requiredStatus={true} 
                    label="Recriação artística ou foto" 
                    placeholder="Informe o endereço web da recriação artistica ou foto do dinossauro"
                    typeValue = {imagem}
                    Auteration={e => setImagem(e)}
                />
                <FormList 
                    requiredStatus={true} 
                    label="Clado" 
                    itens={props.clados}
                    typeValue = {clado}
                    Auteration={e => setClado(e)}
                />
                <FormButton>
                    Gravar Dinossauro
                </FormButton>
            </form>
        </div>
    )
}

export default FullForm