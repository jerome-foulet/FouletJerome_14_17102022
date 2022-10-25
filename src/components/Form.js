import DatePicker from "./DatePicker";
import Input from "./Input";
import Select from "./Select";
import { states } from "./../assets/states.js";
import { addEmployee } from "../features/employees";
import { useStore } from "react-redux";
import { useState } from "react";

export default function Form({ showModalCallback }) {
  const store = useStore();

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateStart, setDateStart] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      addEmployee(store, {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        dateOfBirth: dateOfBirth ? dateOfBirth.format("MM/DD/YYYY") : "",
        startDate: dateStart ? dateStart.format("MM/DD/YYYY") : "",
        street: event.target.street.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zipCode: event.target.zipCode.value,
        department: event.target.department.value,
      })
    ) {
      showModalCallback(true);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input id="firstName" label="FirstName" />
      <Input id="lastName" label="Last Name" />

      <DatePicker
        value={dateOfBirth}
        setValue={setDateOfBirth}
        id="dateOfBirth"
        label="Date of Birth"
      />

      <DatePicker
        value={dateStart}
        setValue={setDateStart}
        id="startDate"
        label="Start Date"
      />

      <fieldset className="address">
        <legend>Address</legend>
        <Input id="street" label="Street" />
        <Input id="city" label="City" />
        <Select name="state" label="State" options={states} />
        <Input id="zipCode" type="number" label="Zip Code" />
      </fieldset>

      <Select
        name="department"
        label="Department"
        options={[
          { key: "Sa", name: "Sales" },
          { key: "Ma", name: "Marketing" },
          { key: "En", name: "Engineering" },
          { key: "Hu", name: "Human" },
          { key: "Le", name: "Legal" },
        ]}
      />

      <button type="submit" className="center">
        Save
      </button>
    </form>
  );
}
