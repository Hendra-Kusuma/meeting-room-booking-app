import AuthLayouts from "../components/Layout/AuthLayout";
import FormRegister from "../components/fragment/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
