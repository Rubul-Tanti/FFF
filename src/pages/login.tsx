import React, { useRef } from 'react';

const Login: React.FC = () => {
  const Email = useRef<HTMLInputElement | null>(null);
  const Password = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailVal = Email.current?.value || '';
    const passwordVal = Password.current?.value || '';
    console.log('email:', emailVal, 'password:', passwordVal);
    fetch("https://localhost/3000/user/v1/login")
    if (Email.current) Email.current.value = '';
    if (Password.current) Password.current.value = '';
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-sm space-y-6">
          <div>
            <img
  src="../../public/logo.png"
  alt="Company Logo"
  className="h-28 w-auto object-contain"
/>
            <h2 className="mt-6 text-2xl font-bold text-gray-800">Welcome to the new way of work.</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={Email}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                ref={Password}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-[60%] bg-[#1A49FF] text-white flex-col justify-center items-center p-10 relative">
        <div className="max-w-md text-center space-y-6 z-10">
          <img
            src=""
            alt="Illustration"
            className="w-full rounded-md"
          />
          <h3 className="text-2xl font-semibold">Sign up to get full access to the Qatalog work hub:</h3>
          <ul className="text-sm text-left list-disc list-inside space-y-1">
            <li>Use search to find any work file across all your connected tools.</li>
            <li>See projects, goals, and work updates for every person and team.</li>
            <li>Create, assign or access workflows and protocols across every team.</li>
          </ul>
          <p className="text-xs text-gray-300 mt-4">
            Qatalog brings information from all your tools together.
          </p>
        </div>
        <div className="absolute -z-10 w-72 h-72 border-2 border-dotted border-white rounded-full top-10 right-10 opacity-20"></div>
      </div>
    </div>
  );
};

export default Login;
