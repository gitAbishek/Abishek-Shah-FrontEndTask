import PATH from "../constants/path";
import Home from "../pages/home/home";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full"> 
        <Main>
          <Routes>
            <Route path={PATH.dashboard} element={<Home />} />
          </Routes>
        </Main>
      </div>
    </>
  );
};

export default Layout;
