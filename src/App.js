import "./index.css";
import "./components/navbar";
// import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/login";
import About from "./components/about";
import RegisterForm from "./components/Register";
import Sidebar from "./components/Sidebar";
import CreateGroup from "./components/Creategp";
import MyGroup from "./components/Mygroup";
import GroupDetail from "./components/GroupDet";
import Bylaws from "./components/Bylaws";
import Saving from "./components/Saving";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/Register" element={<RegisterForm />}></Route>
          <Route exact path="/sidebar" element={<Sidebar />}></Route>
          <Route exact path="/Creategp" element={<CreateGroup />}></Route>
          <Route exact path="/MyGroup" element={<MyGroup />}></Route>
          <Route exact path="/GroupDet" element={<GroupDetail />}></Route>
          <Route exact path="/Bylaws" element={<Bylaws />}></Route>
          <Route exact path="/Saving" element={<Saving />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
