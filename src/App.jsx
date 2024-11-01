import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"

function App() {

  return (
    <div className="bg-black2 text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetails />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
