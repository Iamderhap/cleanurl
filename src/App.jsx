import Api from "./Components/Api"
import {Route, BrowserRouter, Routes} from "react-router-dom"
import ErrorPage from "./Components/Error"
import Report from "./Components/Report"
import Privacy from "./Components/Privacy";
import Contact from "./Components/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home/>} /> */}
          <Route path='/api' element={<Api />} />
          <Route path='/report' element={<Report />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/contact' element={<Contact />} />

          {/* Should be last route */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


        {/* Should be last route */}
     
