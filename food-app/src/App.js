import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Routers/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
      <div>
        <Switch>
          <Route path="/">
            <Header/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
    // <Router path = '/'>
    //   <div className="App">
    //     <Header></Header>
    //     <Switch>{Loadcomponents(Main)}</Switch>
    //     <Footer></Footer>
    //   </div>
    // </Router>
  );
}

export default App;
