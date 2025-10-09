import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { SignUpPage } from "./Pages/SignUpPage"
import { SignInPage } from "./Pages/SignInPage"
import { GlobalWrapper } from "./wrappers/GlobalWrapper"
import { DashBoard } from "./Pages/DashBoard"
import { AddCar } from "./Pages/TestPage"
import { SellerDashBoard } from "./Pages/SellerDashBoard"
import { Alerts } from "./Pages/Alerts"
import { AddCarPage } from "./Pages/AddCar"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/test" element={<AddCar/>} />
          <Route path="/seller" element={<SellerDashBoard />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/addcar" element={<AddCarPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
