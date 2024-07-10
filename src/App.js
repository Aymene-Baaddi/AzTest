import React  from 'react';


import './App.css';

function App({  }) {
  // eslint-disable-next-line
  const a = 10;

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center">Hello , entrer votre infos pour se connecter </h2>
        <form >
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Entrez votre email"
              
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Entrez votre mot de passe"
             
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            clicker pour se connecter
          </button>
        </form>
        <div className="text-center mt-3">
         
        </div>
      </div>
    </div>
  );
}

export default App;
