import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
