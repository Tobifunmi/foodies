import "./App.css";
import Home from './components/Home'
import Contact from "./components/Contact"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          
            <Route path='/' element = {<Home />}></Route>
        <Route path='/contact' element = {<Contact />}></Route>
        <Route path='/product' element = {<Product />}></Route>
        <Route path='/about' element = {<About />}></Route>
          
        
        </Routes>
        
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
