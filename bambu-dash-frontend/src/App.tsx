import ConfigWifiPage from "@/pages/Config/ConfigWifiPage";
//import SplashPage from "@/pages/Splash/SplashPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashPage from "@/pages/Splash/SplashPage";
import ConfigPrinterPage from "@/pages/Config/ConfigPrinterPage";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/config/wifi" element={<ConfigWifiPage />} />
        <Route path="/config/printer" element={<ConfigPrinterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
