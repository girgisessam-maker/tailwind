
import Header1 from "./components/header1";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Iphone from "./pages/iphone";

export default function App() {
  return (
    <div className="w-full bg-fuchsia-900 flex flex-col  items-center ">
       
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/iphone" element={<Iphone/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
