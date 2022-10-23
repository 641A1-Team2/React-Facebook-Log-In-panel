import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="textbox">
    <h1>facebook</h1>
    <h2>Connect with friends and the world <br/>around you on Facebook.</h2>
</div>
<div className="container">
    <div className="form">
        <input type="text" className="text" placeholder="Email or phone number"/><br/>
        <input type="password" className="text" placeholder="Password"/><br/>
        <button> Log In</button>
        <p><a href="">Forget Password?</a><br/></p>
        <div className="bnt">
            <button>Create New Account</button>
        </div>
    </div>
</div>  
    </div>
  );
}

export default App;
