import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Components/Counter';
import FAQ from './Components/FAQ';
import CounterWithEffect from './Components/CounterEffect';
import Home from "./Components/Home";
///////////////
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import ProductDetails from './Components/Components4/ProductDetails';
import HelpCenter from './Components/Components4/HelpCenter';
import ContactUs from './Components/Components4/ContactUs';

function App() {
  const product = {
    name: 'Sample Product',
    description: 'This is a description of the sample product.',
    price: '99.99',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">Shop Now</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Help Center" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/help-center/faq">FAQ</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/help-center/contact">Contact Us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<ProductDetails product={product} />} />
            <Route path="/help-center/*" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}


// function App() {
//   return (
//        <div className="container">
//        {/* <h1 className="text-center my-5">React Lab-2</h1>
//       <Counter />
//       <FAQ />
//       <CounterWithEffect />
//       //LAB-2 REACT
//       <div className='container'>
//       <h1 className="text-center my-5">React Lab-3</h1>
//       <Home />
//       </div> */}


//     </div>
//   );
// }

export default App;

////////////////////////////////


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
