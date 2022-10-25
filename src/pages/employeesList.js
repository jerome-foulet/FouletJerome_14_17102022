import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { selectEmployeesList } from "./../utils/selectors";
import { useSelector } from "react-redux";

function EmployeesList() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  const employeesList = useSelector(selectEmployeesList);
  console.log(employeesList);
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <NavLink to="/">Home</NavLink>
      </div>
    </main>
  );
}

export default EmployeesList;
