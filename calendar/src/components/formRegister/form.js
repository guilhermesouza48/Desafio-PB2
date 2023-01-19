import './form.css'

function Registro() {
  return (
    <div className="formulario">
      <h1>Welcome,</h1>
      <p>Please, register to continue</p>

      <input placeholder="Your first name"></input>
      <input placeholder="Your last name"></input>
      <input placeholder="YMM/DD/YYYY"></input>
      <input placeholder="Your Country"></input>
      <input placeholder="Your City"></input>
      <input placeholder="A valid e-mail here"></input>
      <input placeholder="Your password"></input>
      <input placeholder="Confirm your password"></input>

      <button>Register Now</button>
    </div>
  );
}

export default Registro
