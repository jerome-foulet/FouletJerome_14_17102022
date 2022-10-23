import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "hrnet-react-plugin";
import { states } from "./../assets/states.js";
import { addEmployee } from "../features/employees";
import { useStore } from "react-redux";

function Home() {
  const store = useStore();
  useEffect(() => {
    document.title = "HRnet";
  }, []);

  const [showModal, setShowModal] = useState(false);

  const showCallback = (event) => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      addEmployee(store, {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        dateOfBirth: event.target.dateOfBirth.value,
        startDate: event.target.startDate.value,
        street: event.target.street.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zipCode: event.target.zipCode.value,
        department: event.target.department.value,
      })
    ) {
      setShowModal(true);
    }
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employees-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input id="dateOfBirth" type="text" />

          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" />

          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {states.map((state) => {
                return <option key={state.abbreviation}>{state.name}</option>;
              })}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>

      <Modal show={showModal} closeCallback={showCallback} style={{}}>
        Employee Created!
      </Modal>
    </main>
  );
}

export default Home;
