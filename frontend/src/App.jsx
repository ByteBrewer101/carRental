import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { SignUpPage } from "./Pages/SignUpPage"
import { SignInPage } from "./Pages/SignInPage"
import { GlobalWrapper } from "./wrappers/GlobalWrapper"
import { DashBoard } from "./Pages/DashBoard"
import { TestPage } from "./Pages/TestPage"


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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
