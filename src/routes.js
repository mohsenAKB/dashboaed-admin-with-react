import Home from "./pages/home/Home";
import UsersList from "./pages/users/UsersList";
import NewUsers from "./pages/newUsers/NewUsers";


let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUsers", element: <NewUsers /> },
];


export default routes