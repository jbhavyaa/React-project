import './App.css';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import Dashboard from './common/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;