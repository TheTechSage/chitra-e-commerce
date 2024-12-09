// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
