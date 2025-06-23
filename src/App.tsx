import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LibraryDetail from "./LibraryDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/library/:id" element={<LibraryDetail />} />
    </Routes>
  );
}

export default App;
