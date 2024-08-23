import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Components/Counter';
import FAQ from './Components/FAQ';
import CounterWithEffect from './Components/CounterEffect';
import Home from "./Components/Home";


function App() {
  return (
       <div className="container">
       <h1 className="text-center my-5">React Lab-2</h1>
      <Counter />
      <FAQ />
      <CounterWithEffect />
      <div className='container'>
      <h1 className="text-center my-5">React Lab-3</h1>
      <Home />
      </div>
    </div>
  );
}

export default App;




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
