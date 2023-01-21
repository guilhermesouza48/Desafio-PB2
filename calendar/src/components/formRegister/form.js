import "./form.css";

function Registro() {
  return (
    <div className="formulario">
      <div className="texts">
        <h1>Welcome,</h1>
        <p>Please, register to continue</p>
      </div>

      <div className="forms">
        <div className="label_corrent">
          <label>first name </label>
          <input type="text" placeholder="Your first name" />
        </div>
        <div className="label_corrent">
          <label>last name</label>
          <input placeholder="Your last name" />
        </div>
        <div className="label_corrent">
          <label>birth date</label>
          <input placeholder="YMM/DD/YYYY" />
        </div>
        <div className="label_corrent">
          <label>Country</label>
          <input placeholder="Your Country" />
        </div>
        <div className="label_corrent">
          <label>City </label>
          <input placeholder="Your City" />
        </div>
        <div className="label_corrent">
          <label>e-mail</label>
          <input placeholder="Valid e-mail here" />
        </div>
        <div className="label_corrent">
          <label>password</label>
          <input placeholder="Your password" />
        </div>
        <div className="label_corrent">
          <label>password</label>
          <input placeholder="Confirm your password" />
        </div>
      </div>

      <button>Register Now</button>
    </div>
  );
}

export default Registro;
