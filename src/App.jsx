import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home, Edit, ShowPage, IndexPage, NewItem } from "./container";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/create' element={<NewItem/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
