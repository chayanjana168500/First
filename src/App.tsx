import "./styles.scss";
import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { DataTableGrid } from "./DataTableGrid";
import TimeMachine from "./TimeMachine";
import { data } from "./data";

export default function App() {
  const [state, setState] = useState({
    tableView: false,
    toggleView: false,
    timeView: true
  });
  const [toggleViewComponent, setToggleView] = useState(true);
  const [toggleLabel, setToggleLabel] = useState("Table View");
  const [rowSelected, setRowSelected] = useState();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setToggleLabel(state.tableView ? "Table View" : "Time Machine View");
    setToggleView(state.tableView);
  };

  const DataTableGridProps = {
    data,
    rowSelected,
    setRowSelected,
    animate: toggleViewComponent
  };
  const TimeMachineProps = {
    data,
    rowSelected,
    setRowSelected,
    animate: !toggleViewComponent,
    state,
    handleChange,
    toggleLabel
  };

  return (
    <div className="App">
      <h1>Palo Alto Networks 2021 Hackathon</h1>
      <h2>Hack Street Boys</h2>
      <div className="container">
        <FormControlLabel
          control={
            <Switch
              checked={state.tableView}
              onChange={handleChange}
              name="tableView"
              color="primary"
            />
          }
          label={toggleLabel}
        />
        {toggleViewComponent ? (
          <DataTableGrid {...DataTableGridProps} />
        ) : (
          <TimeMachine {...TimeMachineProps} />
        )}
      </div>
    </div>
  );
}
