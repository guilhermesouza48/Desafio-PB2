import "./App.css";
import Registro from "./components/formRegister/form";
import Logo from "./components/imgs/compass.png"

function App() {
  return (
    <div className="container">
      <Registro />

      <div className="Imagens">
        <img id="logoimg" src={Logo} alt="Logo compass" />
      </div>
    </div>
  );
}

export default App;
