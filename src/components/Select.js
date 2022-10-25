import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { default as SelectMui } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Select({
  keyValue,
  setValue,
  fields,
  name,
  label,
  options,
}) {
  const handleChange = (event) => {
    setValue({ ...fields, [keyValue]: event.target.value });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <SelectMui
        id={name}
        value={fields[keyValue]}
        label={label}
        onChange={handleChange}
      >
        {options.map((state) => {
          return (
            <MenuItem
              key={state.abbreviation ? state.abbreviation : state.key}
              value={state.name}
            >
              {state.name}
            </MenuItem>
          );
        })}
      </SelectMui>
    </FormControl>
  );
}
