import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./components/HomeComponent/CardPage";
import FormPage from "./components/FormComponent/FormPage";
import { Navbar } from "./components/HeaderComponent/Navbar";
import { Footer } from "./components/FooterComponent/Footer";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/card" element={<CardPage />} />
          </Routes>
          <Footer/> {/* <Footer /> */}
        </>
      </BrowserRouter>
    </div>

  );
}

export default App;
