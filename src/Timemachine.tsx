
import "./TimeMachine.scss";
import React, { useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function TimeMachine(props) {
  const {
    data,
    rowSelected,
    setRowSelected,
    animate,
    state,
    handleChange,
    toggleLabel
  } = props;

  console.log("time machine rowSelected", rowSelected);
  console.log("time machine view height", 520 * data.length);

  useEffect(() => {
    if (rowSelected > 1) {
      //window.scrollTo(0, 570 * (rowSelected - 1) + 235 - 50);
      window.scrollTo(0, 595 * (rowSelected - 1) + 240);
    }
  }, [rowSelected]);

  return (
    <div
      className="time-machine"
      style={{
        transition: "1.5s",
        animation: `1.5s ease-out 0s 1 ${
          animate ? "fadeInCard" : "fadeOutCard"
        }`
        // display: animate ? "block" : "none"
      }}
    >
      <ul className="cards">
        {data.map((item) => (
          <li
            key={item.alerts}
            id={item.id}
            className="cards-list"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              transition: "1.5s"
            }}
            onClick={(e) => {
              console.log("record clicked", e.currentTarget.id);
              setRowSelected(e.currentTarget.id);
            }}
          >
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
            <ul>
              <li>
                <div className="label">Policy Name</div>
                <div className="content">{item.policyName}</div>
              </li>
              <li>
                <div className="label">Alerts</div>
                <div className="content">{item.alerts}</div>
              </li>
              <li>
                <div className="label">Policy Type</div>
                <div className="content">{item.policyType}</div>
              </li>
              <li>
                <div className="label">Severity</div>
                <div className="content">{item.severity}</div>
              </li>
              <li>
                {item.labels && <div className="label">Labels</div>}
                <div className="content">{item.labels}</div>
              </li>
              <li>
                {item.complianceStandard && (
                  <div className="label">Compliance Standard</div>
                )}
                <div className="content">{item.complianceStandard}</div>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
