import FormField from "../FormField"
import "./FullForm.css"

const FullForm = () => {
    return(
        <div className="form_box">
            <h2>Preencha os dados para criar o card do dinossauro.</h2>
            <FormField label="Espécie" placeholder="Digite a espécie do dinossauro"/>
            <FormField label="Família" placeholder="Digite a família do dinossauro"/>
            <FormField label="Recriação artística ou foto" placeholder="Informe o endereço web da recriação artistica ou foto do dinossauro"/>
        </div>
    )
}

export default FullForm