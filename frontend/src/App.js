import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import SideMenu from "./SideMenu";
import Navigation from "./components/TeacherManagement/Navigation";





function App() {
  return (
    <BrowserRouter>
    <SideMenu/>
  <Route  path="/navTeacher" exact component={Navigation} />
  



    </BrowserRouter>

  );
}

export default App;
