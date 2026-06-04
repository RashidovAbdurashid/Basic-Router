import "./App.css";
import Home from "./components/Home";
import Libery from "./components/Libery";
import Layout from "./components/Layot";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="libery" element={<Libery />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
