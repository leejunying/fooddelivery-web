import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
function App() {
  return (
    <Router>
      <div>
        <Route path="/">
          <Navbar />
          <Banner />
          <Menu />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
