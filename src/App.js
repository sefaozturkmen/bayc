import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route index exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
