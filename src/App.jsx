import Api from "./Components/Api"
import {Route, BrowserRouter, Routes} from "react-router-dom"
import ErrorPage from "./Components/Error"
import Report from "./Components/Report"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home/>} /> */}
        <Route path="/api" element={<Api/>} />
        <Route path="/report" element={<Report/>} />



        {/* Should be last route */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
