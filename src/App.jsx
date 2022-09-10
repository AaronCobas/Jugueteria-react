import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/ItemListContainer';
function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer test="prueba"/>
    </>
  );
}
export default App;
