import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import Settings from "./components/Settings";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Settings} path="/settings" exact />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
