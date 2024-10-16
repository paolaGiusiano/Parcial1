import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
// import Home  from './pages/Home'
import Recetas from './pages/Receta';
import DetallesReceta from './pages/DetallesReceta';
import AgregarReceta from './pages/AgregarReceta';
import EditarReceta from './pages/EditarReceta';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      
        <Route path="/*" element={<Navigate replace to="/recetas" />} />

        <Route path="/recetas" element={<Recetas />} />

        <Route path="/details/:id" element={<DetallesReceta />}  /> 

        <Route path="/agregar" element={<AgregarReceta />} />

        <Route path="/editar/:id" element={<EditarReceta />} />

        {/*<Route path="/add-sport" element={<AddSport />} />

        <Route path="/sports/:id" element={<Detalles />}  /> 
        */}
      </Routes>
    </>
  )
}

export default App
