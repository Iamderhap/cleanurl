import Api from "./Components/Api"
import {Route, BrowserRouter, Routes} from "react-router-dom"
import ErrorPage from "./Components/Error"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home/>} /> */}
        <Route path="/api" element={<Api/>} />



        {/* Should be last route */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
