import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Admin from "./components/Admin/Admin/Admin";
import AddServices from "./components/Admin/AddServices/AddServices";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import Navbar from "./components/Home/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignIn from "./components/SignIn/SignIn";
import Book from "./components/User/Book/Book";
import { createContext, useState } from "react";
import BookList from "./components/User/BookList/BookList";
import AddReview from "./components/User/AddReview/AddReview";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <PrivateRoute path="/book/:_id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/bookList">
            <BookList></BookList>
          </Route>
          <Route path="/review">
            <AddReview></AddReview>
          </Route>
          <Route path="/admin/orderList">
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
    </UserContext.Provider>
  );
}

export default App;
