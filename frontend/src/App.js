
import './App.css';
import Router from './components/Router.js';
import Context from './components/Context.js';


function App() {

  const userData = {
    name: "Pascal",
    email: "p1212@c.edu",
    loggedIn: true,
    cartItems: 4
  };

  return (
    <>
      <Context.Provider value={userData}>
        <Router/>
      </Context.Provider>
    </>
  );
}

export default App;
