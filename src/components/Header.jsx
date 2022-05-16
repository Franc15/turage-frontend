const Header = () => {
  return (
    <div className="flex flex-col text-gray-800 text-center w-full">
      <div className="w-16 h-16 mx-auto mt-12 mb-2">
        <img src="https://i.ibb.co/5WpZ62y/logo512.png" alt="logo512" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Turage</h1>
        <p className="text-sm">Your #1 Ride Sharing App</p>
      </div>
    </div>
  );
};

export default Header;
