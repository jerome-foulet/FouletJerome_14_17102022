import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { selectEmployeesList } from "./../utils/selectors";
import { useSelector } from "react-redux";
import Datatable from "./../components/Datatable";

function EmployeesList() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  const employeesList = useSelector(selectEmployeesList);
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        {employeesList.length > 0 && <Datatable rows={employeesList} />}
        <br />
        <br />
        <br />
        <br />
        <NavLink to="/">Home</NavLink>
      </div>
    </main>
  );
}

export default EmployeesList;
