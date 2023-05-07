import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { StudentData } from "../../config/Data";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TaskDialoge from "./Dialoge/TaskDialoge";

const TaskAssign = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const [filterClasses, setFilterClasses] = useState(StudentData);
  const [taskDialoge, setTaskDialoge] = useState(false);
  const [profileDialoge, setProfileDialoge] = useState(false);
  const [noteDialoge, setNoteDialoge] = useState(false);

  const classDetail = [
    { name: "Seven", code: "Seven" },
    { name: "Eight", code: "Eight" },
    { name: "Nine", code: "Nine" },
    { name: "Ten", code: "Ten" },
    { name: "Eleven", code: "Eleven" },
    { name: "Twelve", code: "Twelve" },
  ];

  const handleSelectClass = (e) => {
    setSelectedClass(e);
    const filterClass = StudentData.filter((item) => item.class === e.name);
    console.log(filterClass);
    setFilterClasses(filterClass);
  };

  const handleTaskAssign = (id) => {
    setTaskDialoge(true);
  };
  const handleProfile = (id) => {
    setProfileDialoge(true);
  };
  const handleNote = (id) => {
    setNoteDialoge(true);
  };

  const assignTask = (item) => {
    return (
      <div>
        <i
          className="pi pi-send mr-2"
          onClick={() => handleTaskAssign(item.id)}
        />
        <i className="pi pi-eye mr-2" onClick={() => handleProfile(item.id)} />
        <i className="pi pi-comment mr-2" onClick={() => handleNote(item.id)} />
      </div>
    );
  };

  return (
    <div className="col-12">
      <div className="grid">
        <div className="col-12 md:col-6">
          <Dropdown
            value={selectedClass}
            onChange={(e) => handleSelectClass(e.value)}
            options={classDetail}
            optionLabel="name"
            placeholder="Select a Class"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="col-12 md:col-6">
          <div className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="col-12 card">
        <DataTable value={filterClasses} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="class" header="Class"></Column>
          <Column field="role" header="Role"></Column>
          <Column field={assignTask} header="Action"></Column>
        </DataTable>
      </div>
      <Dialog
        header="Task Assign"
        visible={taskDialoge}
        style={{ width: "50vw" }}
        onHide={() => setTaskDialoge(false)}
      >
        <TaskDialoge />
      </Dialog>
      <Dialog
        header="View Profile"
        visible={profileDialoge}
        style={{ width: "50vw" }}
        onHide={() => setProfileDialoge(false)}
      >
        KUMAR
      </Dialog>
      <Dialog
        header="Note For Student"
        visible={noteDialoge}
        style={{ width: "50vw" }}
        onHide={() => setNoteDialoge(false)}
      >
        YADAV
      </Dialog>
    </div>
  );
};

export default TaskAssign;
