import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Login from "./components/Login/Login";
import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import Navbar from "./components/Navbar/Navbar";
import PruebaFetchDos from "./components/PrubaFetchDos/PruebaFetchDos";
import PruebaFetchUno from "./components/PruebaFetchUno/PruebaFetchUno";

function App() {
  return (
    <div className="App">
      <Navbar>
        {/* <CounterContainer /> */}
        {/* <MaterialGrid /> */}
        {/* <Login /> */}
        {/* <FetchingData /> */}
        <ItemListContainer />
        {/* <ItemDetailContainer /> */}
        <PruebaFetchUno />
        <PruebaFetchDos />
      </Navbar>
    </div>
  );
}

export default App;
