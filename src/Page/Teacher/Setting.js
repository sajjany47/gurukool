import React from "react";
import { Panel } from "primereact/panel";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

const Setting = () => {
  const [date, setDate] = useState(null);
  return (
    <div>
      <Panel header={"Leave Apply"} className="my-2" toggleable>
        <div className="grid">
          <div className="col-12 md:col-4">
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              placeholder="Select Leave Date"
              showIcon
              selectionMode="range"
              readOnlyInput
            />
          </div>
          <div className="col-12 md:col-4"></div>
          <div className="col-12 md:col-4"></div>
        </div>
      </Panel>
    </div>
  );
};

export default Setting;
