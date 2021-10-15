import Routers from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        posição="superior direito"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        arrastável
        pauseOnHover
      />
      <Routers />
    </>
  );
}

export default App;
