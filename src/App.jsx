import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navabr from "./components/Navbar"

function App() {

  return (
    <>
      <div className="w-screen h-screen bg-main lg:py-2 xl:py-4 overflow-hidden">
        <Navabr />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
