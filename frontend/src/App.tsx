import { Login } from "./pages/Login"
import Signup from "./pages/Signup"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/" Component={Signup}/>
        <Route path="/login" Component={Login}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
