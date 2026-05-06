import Navbar from "./components/Navbar"
import AddProperty from "./pages/AddProperty"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Myproperties from "./pages/Myproperties"
import Properties from "./pages/Properties"
import Register from "./pages/Register"
import "./styles/global.css"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myproperties" element={<Myproperties />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
