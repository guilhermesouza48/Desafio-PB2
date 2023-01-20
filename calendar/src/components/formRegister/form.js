import "./form.css";

function Registro() {
  return (
    <div className="formulario">
      <div className="texts">
        <h1>Welcome,</h1>
        <p>Please, register to continue</p>
      </div>

      <div className="forms">
        <div>
          {" "}
          <label>
            first name
            <input type="text" placeholder="Your first name" />
          </label>
        </div>
        <div>
          <label>
            last name
            <input placeholder="Your last name" />
          </label>
        </div>
        <div>
          <label>
            birth date
            <input placeholder="YMM/DD/YYYY" />
          </label>
        </div>
        <div>
          <label>
            Country
            <input placeholder="Your Country" />
          </label>
        </div>
        <div>
          <label>
            City
            <input placeholder="Your City" />
          </label>
        </div>
        <div>
          <label>
            e-mail
            <input placeholder="Valid e-mail here" />
          </label>
        </div>
        <div>
          <label>
            password
            <input placeholder="Your password" />
          </label>
        </div>
        <div>
          <label>
            password
            <input placeholder="Confirm your password" />
          </label>
        </div>
      </div>

      <button>Register Now</button>
    </div>
  );
}

export default Registro;
