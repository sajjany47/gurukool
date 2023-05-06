import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { StudentData } from "../../config/Data";

const TaskAssign = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const classDetail = [
    { name: "Seven", code: "Seven" },
    { name: "Eight", code: "Eight" },
    { name: "Nine", code: "Nine" },
    { name: "Ten", code: "Ten" },
    { name: "Eleven", code: "Eleven" },
    { name: "Twelve", code: "Twelve" },
  ];

  const assignTask = () => {
    return (
      <div>
        <i className="pi pi-send mr-2" />
        <i className="pi pi-eye mr-2" />
        <i className="pi pi-comment mr-2" />
      </div>
    );
  };

  return (
    <div className="col-12">
      <div className="grid">
        <div className="col-12 md:col-6">
          <Dropdown
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.value)}
            options={classDetail}
            optionLabel="name"
            placeholder="Select a Class"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="col-12 md:col-6">
          {/* <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          /> */}
        </div>
      </div>
      <div className="col-12 card">
        <DataTable value={StudentData} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="class" header="Class"></Column>
          <Column field="role" header="Role"></Column>
          <Column field={assignTask} header="Action"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default TaskAssign;
