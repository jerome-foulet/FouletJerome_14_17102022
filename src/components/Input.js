import TextField from "@mui/material/TextField";

export default function Input({ fields, setValue, type = "text", id, label }) {
  const handleChange = (event) => {
    setValue({ ...fields, [id]: event.target.value });
  };

  let inputProps = {};
  if (type === "number") {
    inputProps = { inputMode: "numeric", pattern: "[0-9]*" };
  }

  return (
    <TextField
      id={id}
      value={fields[id]}
      onChange={handleChange}
      label={label}
      inputProps={inputProps}
    />
  );
}
