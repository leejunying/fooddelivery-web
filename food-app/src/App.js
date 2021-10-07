import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Routers/Main";

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
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>{Loadcomponents(Main)}</Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
