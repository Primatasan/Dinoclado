import './FormField.css'

const FormField = (props) => {

    return(
        <div className="text-field">
            <label>{props.label}
                <input value={props.typeValue}  onChange={event => props.Auteration(event.target.value)} required={props.requiredStatus} placeholder={props.placeholder}/>
            </label>
        </div>
    )
}

export default FormField;