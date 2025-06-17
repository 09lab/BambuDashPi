import ConfigWifiPage from "@/pages/Config/ConfigWifiPage";
//import SplashPage from "@/pages/Splash/SplashPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashPage from "./pages/Splash/SplashPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/config/wifi" element={<ConfigWifiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
