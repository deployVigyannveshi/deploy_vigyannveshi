/*Important-react imports*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*Needed so that all pages load from the top */
import ScrollToTop from "./ScrollToTop";

/*importing backdrop*/
import Backdrop from "./components/backdrop/Backdrop";

/*importing components*/
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

/*importing pages*/
import About from "./pages/about/About";
import Vidya from "./pages/vidya/Vidya.jsx";

/*Importing-Posts */
import JustPredictTheRemainder from "./posts/Just_predict_the_remainder/JustPredictTheRemainder";
import VoltageRegulator from "./posts/voltage_regulator/VoltageRegulator";
import ControllingBrightnessOfImageUsingPhotoresistor from "./posts/Controlling_brightness_of_image_using_photoresistor/ControllingBrightnessOfImageUsingPhotoresistor";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Backdrop />
        <div
          className="content"
          style={{
            /* background, size and attachments*/
            width: "100vw",
            /*inner content adjustment*/
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Navbar />
          <Switch>
            {/* Routing Posts */}
            <Route path="/5_simple_steps_to_create_2_in_1_Voltage-Regulator">
              <VoltageRegulator />
            </Route>
            <Route path="/just_predict_the_remainder">
              <JustPredictTheRemainder />
            </Route>
            <Route path="/controlling_brightness_of_image_using_photoresistor">
              <ControllingBrightnessOfImageUsingPhotoresistor />
            </Route>
            {/* ***Routing Posts*** */}
            {/* Routing Pages */}
            <Route path="/vidya">
              <Vidya />
            </Route>
            <Route exact path="/">
              <About />
            </Route>
            {/* ***Routing Pages*** */}
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
