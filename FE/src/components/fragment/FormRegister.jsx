import FormInput from "../formInput/Index"
import Button from "../button/button"

function FormRegister() {
    return (
      <form>
      <FormInput type="text" id="username" placeholder="username">Username</FormInput>
      <FormInput type="email" id="email" placeholder="example@mail.com">Email </FormInput>
      <FormInput type="password" id="password" placeholder="*****">Password </FormInput>
      <FormInput type="password" id="confirmPassword" placeholder="*****">Confirm Password </FormInput>
      <div className="flex items-center justify-between">
        <Button text="Register" color="bg-blue-500 text-white"/>
      </div>
    </form>
    )
}

export default FormRegister