import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
