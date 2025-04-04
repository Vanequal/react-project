import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SteamContact from "./pages/SteamContact";
import ConfirmSending from "./pages/ConfirmSending";
import CheckCode from "./pages/CheckCode";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steamcontact" element={<SteamContact/>}/>
        <Route path="/confirmsending" element={<ConfirmSending/>}/>
        <Route path="/checkcode" element={<CheckCode/>}/>
      </Routes>
    </Router>
  );
};

export default App;
