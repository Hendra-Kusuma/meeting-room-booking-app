import FormInput from "../formInput/Index"
import Button from "../button/button"
import { Link } from "react-router-dom"

function FormRegister() {
    return (
      <form>
      <FormInput type="text" id="username" placeholder="username">Username</FormInput>
      <FormInput type="email" id="email" placeholder="example@mail.com">Email </FormInput>
      <FormInput type="password" id="password" placeholder="*****">Password </FormInput>
      <FormInput type="password" id="confirmPassword" placeholder="*****">Confirm Password </FormInput>
      <div className="flex items-center justify-between">
        <Button text="Register" color="bg-blue-500 text-white"/>
        {/* <p className="text-sm text-blue-500 px-4">Already have account? <Link rel="stylesheet" to="/login" className="text-sm text-blue-500 hover:text-blue-700">
          Login Here
        </Link></p> */}
      </div>
    </form>
    )
}

export default FormRegister