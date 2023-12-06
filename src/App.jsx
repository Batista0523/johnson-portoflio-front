import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Edit, ShowPage, IndexPage, NewItem, Contact } from "./container";
function App() {


  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewItem />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
