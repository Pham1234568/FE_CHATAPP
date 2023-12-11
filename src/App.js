import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Regsiter from './pages/Regsiter';
import Home from './pages/Home';
import Start from './components/Start';
import { StrictMode } from 'react';

function App() {
  return (
 <StrictMode>
     <div className="bg-[#F8F4EA]">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Regsiter />} />
          <Route exact path="/chats" element={<Home />} />
          <Route exact path="/" element={<Start />} />
        </Routes>
      </Router>
    </div>
 </StrictMode>
  );
}

export default App;
