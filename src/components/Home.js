import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
// import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
// import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DateTimePicker from "@material-ui/lab/DateTimePicker";

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}





