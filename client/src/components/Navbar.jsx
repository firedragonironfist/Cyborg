function Navbar() {
  return (
    <div className="text-center">
  <h1 className="text-4xl font-bold mb-4">React Authentication Tutorial</h1>

  <nav className="mb-6">
    <a href="/" className="block text-blue-500 hover:text-blue-700 mb-2">Home</a>
    <a href="/free" className="block text-blue-500 hover:text-blue-700 mb-2">Free Component</a>
    <a href="/auth" className="block text-blue-500 hover:text-blue-700">Auth Component</a>
  </nav>
</div>

  )
}

export default Navbar
