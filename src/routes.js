import Home from "./pages/home/Home";
import UsersList from "./pages/users/UsersList";


let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
];


export default routes