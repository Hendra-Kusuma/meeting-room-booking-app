import Label from "./Label"
import Input from "./Input"

function FormInput (props) {
    const {type, id, placeholder, children} = props
    return (
        <div className="mb-4">
            <Label htmlFor={ id }>{children}</Label>
            <Input type= {type} id={ id } placeholder={placeholder} />
        </div>
    )
}

export default FormInput