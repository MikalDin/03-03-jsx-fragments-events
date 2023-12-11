import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(' ');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Input value:', inputValue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <>
       <h1> WelcoMe 2 REACT</h1>
       <p> Hope you're excited ands ready 2 delve</p>
       <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text..."
        />
        <button type="submit">Submit</button>
       </form>
       
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
