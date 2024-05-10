import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { cartState } from "./components/context/Context";
import Home from "./components/Home";
import Cart from "./components/Cart"
// import { Card } from "react-bootstrap";

function App() {
  const state = cartState();
  console.log("stste", state);

  return (
    <>
      <Router>
        <Header />
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/cart" element={<Cart/>}/>
</Routes>
       
      </Router>
    </>
  );
}

export default App;
