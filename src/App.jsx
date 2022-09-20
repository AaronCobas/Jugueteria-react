import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/navbar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<ItemListContainer />}></Route>
    <Route path="/category/:id" element={<ItemListContainer />}></Route>
    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    <Route path="/cart" element={<Cart></Cart>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
