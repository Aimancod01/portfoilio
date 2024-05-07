import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout isOpen={isOpen} setIsOpen={setIsOpen} />}>
            <Route index element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
