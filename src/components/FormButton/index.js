import "./FormButton.css"

const FormButton = (props) => {
    return(
        <button className="button">
            {props.children}
        </button>
    )
}

export default FormButton
