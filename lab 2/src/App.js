import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.js'
import Home from './components/CountryList.js'
import Details from './components/CountryDetails.js'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country/:id' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
