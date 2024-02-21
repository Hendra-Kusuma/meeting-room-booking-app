import AuthLayouts from "../components/Layout/AuthLayout";
import FormLogin from "../components/fragment/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
