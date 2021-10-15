import NavBar from "./Components/NavBar";
import Routers from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavBar />
      <Routers />
      <ToastContainer />
    </>
  );
}

export default App;
