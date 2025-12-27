import './App.css';
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Products from "./pages/Products"
import About from "./pages/About"
import Order from "./pages/Order"
import Nav from "./layout/Nav"

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </div>
  );
}

export default App;