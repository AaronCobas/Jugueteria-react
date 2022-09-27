import './App.css';
import ItemDetailContainer from './container/ItemDetailContainer';
import Navbar from './components/navbar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<ItemListContainer />}></Route>
    <Route path="/category/:id" element={<ItemListContainer />}></Route>
    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    <Route path="/cart" element={<Cart></Cart>}> </Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer
theme="dark"
position="bottom-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </CartContextProvider>
  );
}
export default App;
