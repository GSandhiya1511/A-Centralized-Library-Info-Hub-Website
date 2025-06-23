function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image Section */}
      <div className="md:w-1/2 h-64 md:h-auto">
        <img
        src="https://i.pinimg.com/736x/0e/2e/7a/0e2e7a2adca6a4444bdd04ffb35a86b0.jpg"
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Login Form Section */}
      <div className="flex items-center justify-center p-10 md:w-1/2 bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input type="email" className="w-full border p-2 rounded" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input type="password" className="w-full border p-2 rounded" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

