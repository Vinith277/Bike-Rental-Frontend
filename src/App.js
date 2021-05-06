import Landing from "./landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Rental from "./rental";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Landing />;
            }}
          />
          <Route
            exact
            path="/rentbike"
            render={(props) => {
              return <Rental />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
