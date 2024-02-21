import FormInput from "../formInput/Index";
import Button from "../button/button";

function FormLogin() {
  function HandleLogin(event) {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    alert("Login Success");
    window.location.href = "/products";
  }

  return (
      <form onSubmit={HandleLogin}>
      <FormInput type="email" id="email" placeholder="example@mail.com">
        Email{" "}
      </FormInput>
      <FormInput type="password" id="password" placeholder="*****">
        Password{" "}
      </FormInput>
      <div className="flex items-center justify-between">
        <Button text="Login" color="bg-blue-500 text-white" type="submit" />
      </div>
    </form>
  );
}

export default FormLogin;
