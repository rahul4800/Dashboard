import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import "./styles/index.scss";
import { productInputs, userInputs } from "./newSource";
import "./darkmode/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className= { darkMode ? "app dark" :"app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />}  />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs}
          title="Add New User" />} />
        </Route>
        <Route path="product">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs } 
          title="Add New User" />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
