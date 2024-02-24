import FormInput from "../formInput/Index";
import Button from "../button/button";
import { useState } from "react";
import { postLogin } from "../../service/product.service";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleLogin = async (event) => {
    event.preventDefault();
    try {
      // Mengambil nilai email dan password dari state
      const emailValue = email;
      const passwordValue = password;
  
      // Periksa apakah nilai email dan password tidak kosong
      if (!emailValue || !passwordValue) {
        setError("Email and password are required");
        return;
      }
  
      // Panggil postLogin dengan objek yang memiliki struktur yang sesuai
      await postLogin(emailValue, passwordValue);
      
      // Jika berhasil, arahkan pengguna ke halaman /rooms
      alert("Login success");
      window.location.href = "/rooms";
    } catch (error) {
      // Tangani kesalahan saat permintaan login
      if (error.response) {
        // Respon dari server didapat, namun status tidak 2xx
        setError(error.response.data.message);
      } else if (error.request) {
        // Respon tidak didapat sama sekali
        setError("Network error, please try again later.");
      } else {
        // Ada kesalahan dalam membuat permintaan
        setError("An error occurred, please try again later.");
      }
    } 
  };

  return (
    <form onSubmit={HandleLogin}>
      <FormInput
        type="email"
        id="email"
        name="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        Email
      </FormInput>
      <FormInput
        type="password"
        id="password"
        name="password"
        placeholder="*****"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        Password
      </FormInput>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex items-center justify-between">
        <Button text="Login" color="bg-blue-500 text-white" type="submit" />
      </div>
    </form>
  );
}

export default FormLogin;
