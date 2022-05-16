const Login = () => {
  return (
    <div class="container px-5 py-2 mx-auto flex flex-wrap items-center mt-16">
      <div class="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:mx-auto w-full">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Log In
        </h2>
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button class="text-white bg-turage-pink border-0 py-2 px-8 focus:outline-none hover:bg-turage-pink-light rounded text-lg">
          Log In
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Don't have an account? Sign Up Here
        </p>
      </div>
    </div>
  );
};

export default Login;
