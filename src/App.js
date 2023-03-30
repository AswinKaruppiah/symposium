import About from "./Ui/About/About";
import Events from "./Ui/Events/Events";
import Intro from "./Ui/Intro/Intro";
import Timer from "./Ui/Timer/Timer";
import { Route, Routes } from "react-router-dom";
import Tech from "./Ui/Events/Tech/Tech";
import Nontech from "./Ui/Events/Non-tech/Non-tech";
import Workshop from "./Ui/Events/Workshop/Workshop";

import Clientside from "./Ui/Slider/Clientside";
import Fullvideo from "./Ui/ShowFullVideo/Fullvideo";
import Footer from "./Ui/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Intro />
              <Timer />
              <About />
              <Events />
              <Clientside />
              <Fullvideo />
              <Footer />
            </>
          }
        />
        <Route path="/tech" element={<Tech />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/nontech" element={<Nontech />} />
      </Routes>
    </div>
  );
}

export default App;
