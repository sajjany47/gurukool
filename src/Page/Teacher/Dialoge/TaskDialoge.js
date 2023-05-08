import React, { useState, useRef } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

const TaskDialoge = () => {
  const toast = useRef(null);
  const [description, setDescription] = useState("");

  const onUploadTask = (e) => {
    const file = e.files[0];
    console.log(file);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };
  return (
    <>
      <Toast ref={toast}></Toast>
      <div className="grid">
        <div className="col-12 md:col-6">
          <InputTextarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            cols={30}
            placeholder="Description about task"
          />
        </div>
        <div className="col-12 md:col-6">
          <FileUpload
            mode="basic"
            name="demo[]"
            url="/api/upload"
            customUpload
            multiple
            accept="image,pdf/*"
            maxFileSize={1000000}
            uploadHandler={(e) => onUploadTask(e)}
          />
        </div>
        <div className="col-12 md:col-12">
          <Button label="Submit" />
        </div>
      </div>
    </>
  );
};

export default TaskDialoge;
