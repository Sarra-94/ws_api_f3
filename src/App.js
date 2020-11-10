import { Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import NavBar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Axios from "axios";
import { useEffect, useState } from "react";
import UserDetails from "./Pages/UserDetails";
import CommentPage from "./Pages/CommentPage";
function App() {
  const [users, setUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(true);
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoadUsers(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home users={users} loadUsers={loadUsers} />}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/posts/:id" component={CommentPage} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
