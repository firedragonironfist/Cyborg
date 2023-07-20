import Register from "./components/register"
import Login from "./components/Login"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <div className="border-l-4 border-gray-300 pl-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4">
              <Register />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4">
              <Login />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
