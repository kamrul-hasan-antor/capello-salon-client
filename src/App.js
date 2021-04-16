import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Admin from "./components/Admin/Admin/Admin";
import AddServices from "./components/Admin/AddServices/AddServices";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import Navbar from "./components/Home/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin/services">
          <Admin></Admin>
        </Route>
        <Route path="/admin/addServices">
          <AddServices></AddServices>
        </Route>
        <Route path="/admin/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/admin/manageServices">
          <ManageServices></ManageServices>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
