import { useState } from "react";

const Register = () => {
  const [register, setRegister] = useState(false);
  return (
    <div>
      <div>
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="block">Email address</label>
          <input  type="email" placeholder="Enter email" className="border border-gray-300 px-3 py-2 w-full" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="block">Password</label>
          <input  type="password" placeholder="Password" className="border border-gray-300 px-3 py-2 w-full" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>

        {register ? (
          <p className="text-green-600">You Are Registered in Successfully</p>
        ) : (
          <p className="text-red-500">You Are Not Registered in</p>
        )} 
      </form>
    </div>
    </div>
  )
}

export default Register;
