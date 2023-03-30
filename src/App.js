import About from "./Ui/About/About";
import Events from "./Ui/Events/Events";
import Intro from "./Ui/Intro/Intro";
import Timer from "./Ui/Timer/Timer";
import { Route, Routes } from "react-router-dom";
import Tech from "./Ui/Events/Tech/Tech";
import Nontech from "./Ui/Events/Non-tech/Non-tech";
import Workshop from "./Ui/Events/Workshop/Workshop";
import Slider from "./Ui/Slider/Slider";
import Clientside from "./Ui/Slider/Clientside";
import Fullvideo from "./Ui/ShowFullVideo/Fullvideo";
import Footer from "./Ui/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="https://AswinKaruppiah.github.io/symposium/"
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
        <Route
          path="https://AswinKaruppiah.github.io/symposium/tech"
          element={<Tech />}
        />
        <Route
          path="https://AswinKaruppiah.github.io/symposium/workshop"
          element={<Workshop />}
        />
        <Route
          path="https://AswinKaruppiah.github.io/symposiumt/nontech"
          element={<Nontech />}
        />
      </Routes>
    </div>
  );
}

export default App;
