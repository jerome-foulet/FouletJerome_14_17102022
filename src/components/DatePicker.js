import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";

export default function DatePicker({ fields, keyValue, setValue, id, label }) {
  const handleChange = (data) => {
    //console.log(data);
    setValue({ ...fields, [keyValue]: data });
  };

  /*let inputProps = {
    id: { id },
  };*/

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label={label}
        inputFormat="MM/DD/YYYY"
        value={fields[keyValue]}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
