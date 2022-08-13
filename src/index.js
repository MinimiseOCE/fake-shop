import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from "./components/Home";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/store" element={<Store />}>
      </Route>
      <Route path="/checkout" element={<Checkout />}>
      </Route>
    </Routes>
  </BrowserRouter>
);