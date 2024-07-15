import Api from "./Components/Api"
import {Route, BrowserRouter, Routes} from "react-router-dom"
import ErrorPage from "./Components/Error"
import Contact from './Components/contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home/>} /> */}
          <Route path='/api' element={<Api />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


        {/* Should be last route */}
     
