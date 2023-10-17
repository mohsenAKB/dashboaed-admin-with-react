import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
function App() {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      {router}
    </>
  );
}

export default App;
