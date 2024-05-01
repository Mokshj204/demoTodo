import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App  = () => {
  return(
    <Router> 
          <Routes>
            <Route index element={ <Home/>}/>
            <Route path='home'element={ <Home/> }/>
            <Route path='about'element={ <About/> }/> 
          </Routes>
    </Router>
  )

}


export default App