import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "POST",
      url: "https://auth-rgw2.onrender.com/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((response) => {
        const result = response.data;
        cookies.set("TOKEN", result.token, {
          path: "/",
        });
        window.location.href = "/auth";
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="email" className="block">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="block">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Register
          </button>

          {login ? (
            <p className="text-green-600">You Are Logged in Successfully</p>
          ) : (
            <p className="text-red-500">You Are Not Logged in</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
