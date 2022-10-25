import Datetime from "react-datetime";
import "../utils/style/react-datetime.css";

export default function DatePicker({ value, setValue, id, label }) {
  const handleChange = (data) => {
    setValue(data);
  };

  let inputProps = {
    id: { id },
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Datetime
        inputProps={inputProps}
        closeOnSelect={true}
        dateFormat="MM/DD/YYYY"
        timeFormat={false}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
