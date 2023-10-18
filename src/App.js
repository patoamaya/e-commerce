import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={"Error al cargar -- Mensaje de error"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Viejo
// function App() {
//   return (
//     <div className="App">
//       <Navbar>
//         {/* <CounterContainer /> */}
//         {/* <MaterialGrid /> */}
//         {/* <Login /> */}
//         {/* <FetchingData /> */}
//         <ItemListContainer />
//         {/* <ItemDetailContainer /> */}
//         {/* <PruebaFetchUno />
//         <PruebaFetchDos /> */}
//       </Navbar>
//     </div>
//   );
// }

export default App;
