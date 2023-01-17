import "./App.css";
// import welcome from "./components/welcome";

function App() {
  return (
    <div>
      <section>
        <h1>Welcome,</h1>
        <h2>To continue browsing safely, log in to the network.</h2>
      </section>
      <section>
        <input type="text" placeholder="user name" id="pessoa"></input>
        <input type="password" placeholder="password" id="senha"></input>
      </section>
      <section>
        <button type="Submit">Login</button>
      </section>
    </div>
  );
}

export default App;
