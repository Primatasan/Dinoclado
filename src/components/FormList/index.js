import "./FormList.css"

const FormList = (props) => {
    return(
        <div className="formlist-field">
            <label>{props.label}
                <select required={props.requiredStatus} value={props.typeValue} onChange={event => props.Auteration(event.target.value)}>
                    {props.itens.map( item => <option key={item}>{item}</option>)}
                </select>
            </label>
        </div>
    )
}

export default FormList