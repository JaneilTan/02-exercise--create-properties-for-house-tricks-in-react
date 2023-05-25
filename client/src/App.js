import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddProperty from "./components/AddProperty";
import Properties from "./components/Properties";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/add" element={<AddProperty />} />
          <Route path="/" element={<Properties />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
