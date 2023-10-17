import Home from "./pages/home/Home";
import UsersList from "./pages/users/UsersList";
import NewUsers from "./pages/newUsers/NewUsers";
import Products from "./pages/products/Products";


let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUsers", element: <NewUsers /> },
  { path: "/products", element: <Products /> },
];


export default routes