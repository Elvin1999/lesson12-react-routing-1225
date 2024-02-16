import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ProductDetail from './ProductDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <section className="top">
          <section
            className="center"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="title">Cocktail App</h1>
            <ul>
              <li>
                <Link className="my-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="my-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="my-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </section>
        </section>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route exact path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
