import './FormField.css'

const FormField = (props) => {
    return(
        <div className="text-field">
            <label>{props.label}
                <input placeholder={props.placeholder}/>
            </label>
        </div>
    )
}

export default FormField;