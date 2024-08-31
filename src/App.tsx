import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import PrivateRouteWrapper from "./layout/PrivateRouteWrapper";
import PublicRouteWrapper from "./layout/PublicRouteWrapper";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouteWrapper isLoggedIn={true} />}>
          <Route path="/*" element={<Layout />} />
        </Route>
        <Route element={<PublicRouteWrapper isLoggedIn={false} />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
