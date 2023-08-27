import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Login from "./components/Login/Login";
import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CounterContainer /> */}

      {/* <MaterialGrid /> */}
      {/* <Login /> */}
      <ItemListContainer />
    </div>
  );
}

export default App;
