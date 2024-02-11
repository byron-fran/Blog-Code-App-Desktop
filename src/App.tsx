import './App.css'
import Page from './components/Page'
import {Routes, Route, Link} from 'react-router-dom'


function App() {


  return (
    <>
      <div>
        <Link to='pagina'>Ir a la pagina 1</Link>
      </div>
      <Routes>
        <Route path='/pagina' element={<Page/>}/>
      </Routes>
    </>
  )
}

export default App
