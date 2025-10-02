import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { SignUpPage } from "./Pages/SignUpPage"
import { SignInPage } from "./Pages/SignInPage"
import { GlobalWrapper } from "./wrappers/GlobalWrapper"
import { DashBoard } from "./Pages/DashBoard"
import { TestPage } from "./Pages/TestPage"
import { SellerDashBoard } from "./Pages/SellerDashBoard"
import { Alerts } from "./Pages/Alerts"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/seller" element={<SellerDashBoard />} />
          <Route path="/alerts" element={<Alerts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
