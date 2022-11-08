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
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    dateStart: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      addEmployee(store, {
        firstName: fields.firstName,
        lastName: fields.lastName,
        dateOfBirth: fields.dateOfBirth
          ? fields.dateOfBirth.format("MM/DD/YYYY")
          : "",
        startDate: fields.dateStart
          ? fields.dateStart.format("MM/DD/YYYY")
          : "",
        street: fields.street,
        city: fields.city,
        state: fields.state,
        zipCode: fields.zipCode,
        department: fields.department,
      })
    ) {
      showModalCallback(true);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        fields={fields}
        setValue={setFields}
        id="firstName"
        label="FirstName"
      />
      <br />
      <br />
      <Input
        fields={fields}
        setValue={setFields}
        id="lastName"
        label="Last Name"
      />
      <br />
      <br />
      <DatePicker
        fields={fields}
        keyValue="dateOfBirth"
        setValue={setFields}
        id="dateOfBirth"
        label="Date of Birth"
      />
      <br />
      <br />
      <DatePicker
        fields={fields}
        keyValue="dateStart"
        setValue={setFields}
        id="startDate"
        label="Start Date"
      />

      <fieldset className="address">
        <legend>Address</legend>
        <Input
          fields={fields}
          setValue={setFields}
          id="street"
          label="Street"
        />
        <br />
        <br />
        <Input fields={fields} setValue={setFields} id="city" label="City" />
        <br />
        <br />
        <Select
          keyValue="state"
          fields={fields}
          setValue={setFields}
          name="state"
          label="State"
          options={states}
        />
        <br />
        <br />
        <Input
          fields={fields}
          setValue={setFields}
          id="zipCode"
          type="number"
          label="Zip Code"
        />
      </fieldset>
      <br />
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
      <br />
    </form>
  );
}
