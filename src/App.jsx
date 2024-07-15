import Api from "./Components/Api"
import {Route, BrowserRouter, Routes} from "react-router-dom"
import ErrorPage from "./Components/Error"
import Terms from './Components/Terms'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home/>} /> */}
        <Route path="/api" element={<Api/>} />



        {/* Should be last route */}
        <Route path="*" element={<ErrorPage/>} />
        <Route path ='/terms' element={<Terms/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
