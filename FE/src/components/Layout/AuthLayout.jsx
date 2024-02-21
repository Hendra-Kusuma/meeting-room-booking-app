import { Link } from "react-router-dom";


const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="max-w-sm w-full px-8 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

function Navigation ({type}) {
  if(type === "login") {
    return (
      <p className="text-sm text-slate-500">dont have account? <Link rel="stylesheet" to="/register" className="text-sm text-blue-500 hover:text-blue-700">
          register here</Link></p>
    )
  } else {
    return (
      <p className="text-sm text-slate-500">already have account? <Link rel="stylesheet" to="/login" className="text-sm text-blue-500 hover:text-blue-700">
          login here</Link></p>
    )
  }
}

export default AuthLayout;
