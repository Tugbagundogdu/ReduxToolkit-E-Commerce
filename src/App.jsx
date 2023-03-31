import Header from './components/Header'
import { Routes , Route } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"

function App() {


  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
      </Routes>

   
    </div>
  )
}

export default App
