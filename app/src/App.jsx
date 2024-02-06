import { Routes, Route , NavLink} from "react-router-dom";
import Endpage from "./component/end";
import "./App.css";
import Homepage from "./component/home";
import Middlepage from "./component/Main";

function App() {
  return (
    <>
    <nav className="nav"> 
      <NavLink to="/"><h2>Kalvium❤️</h2></NavLink>
      <div className="edit">
      <NavLink to="about"><h3>About</h3></NavLink>
      <NavLink to="/contacts"><h3>Contacts</h3></NavLink>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route  path="/contacts" element={<Middlepage />} />
      <Route path="/about" element={<Endpage />} />
      <Route  path="*" element={<h1>404 page not found</h1>} />
    </Routes>
    </>
  );
}

export default App;
