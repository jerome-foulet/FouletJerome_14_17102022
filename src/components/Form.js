import DatePicker from "./DatePicker";
import Input from "./Input";
import Select from "./Select";
import { states } from "./../assets/states.js";
import { addEmployee } from "../features/employees";
import { useStore } from "react-redux";
import { useState } from "react";

export default function Form({ showModalCallback }) {
  const store = useStore();

  const [fields, setFields] = useState({
    dateOfBirth: "",
    dateStart: "",
    state: "",
    department: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      addEmployee(store, {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        dateOfBirth: fields.dateOfBirth
          ? fields.dateOfBirth.format("MM/DD/YYYY")
          : "",
        startDate: fields.dateStart
          ? fields.dateStart.format("MM/DD/YYYY")
          : "",
        street: event.target.street.value,
        city: event.target.city.value,
        state: fields.state,
        zipCode: event.target.zipCode.value,
        department: fields.department,
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
        fields={fields}
        keyValue="dateOfBirth"
        setValue={setFields}
        id="dateOfBirth"
        label="Date of Birth"
      />

      <DatePicker
        fields={fields}
        keyValue="dateStart"
        setValue={setFields}
        id="startDate"
        label="Start Date"
      />

      <fieldset className="address">
        <legend>Address</legend>
        <Input id="street" label="Street" />
        <Input id="city" label="City" />
        <br></br>
        <br></br>
        <Select
          keyValue="state"
          fields={fields}
          setValue={setFields}
          name="state"
          label="State"
          options={states}
        />
        <Input id="zipCode" type="number" label="Zip Code" />
      </fieldset>
      <br></br>
      <Select
        keyValue="department"
        fields={fields}
        setValue={setFields}
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
      <br></br>
    </form>
  );
}
