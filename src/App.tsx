import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConfirmSending from "./pages/ConfirmSending";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmsending" element={<ConfirmSending/>}/>
      </Routes>
    </Router>
  );
};

export default App;
