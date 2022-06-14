import Header from "../components/Header";
import Login from "../components/Login";

function driverLogin() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <Login />
    </div>
  );
}

export default driverLogin;
