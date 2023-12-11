import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const showAlert = () => {
    alert('You clicked the button!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <>
       <h1> WelcoMe 2 REACT</h1>
       <p> Hope you're excited ands ready 2 delve</p>
       <button onClick={showAlert}>Click me</button>
       
       </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;










// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
       
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> 


//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
