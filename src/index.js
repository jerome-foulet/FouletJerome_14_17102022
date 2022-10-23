import ReactDOM from "react-dom/client";
import "./utils/style/index.css";

import Home from "./pages/home";
import EmployeesList from "./pages/employeesList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/employees-list" element={<EmployeesList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);
