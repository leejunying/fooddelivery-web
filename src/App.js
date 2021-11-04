import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Routers/Main";
import Footer from "./Components/Footer/View/Footer";
import Top from "./Components/Header/View/Header";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Components/Header/View/Header";
function App() {
  const Loadcomponents = (routes) => {
    var result = [];

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });

      return result;
    }
  };

  return (
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route path="/" component={Home}>

    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Router path="/">
      <div className="App">
        <Topbar />
        <Switch>{Loadcomponents(Main)}</Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
