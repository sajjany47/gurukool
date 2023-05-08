import React from "react";
import { Image } from "primereact/image";

const ProfileDialoge = ({ data }) => {
  return (
    <div className="col-12">
      <div className="grid">
        <div className="col-12 md:col-8">
          <div className="col-12 md:col-6 flex justify-content-between">
            <label className="font-bold ">ID </label>
            <span className="font-medium">{data.id}</span>
          </div>
          <div className="col-12 md:col-6 flex justify-content-between">
            <label className="font-bold">Name </label>
            <span className="font-medium">{data.name}</span>
          </div>

          <div className="col-12 md:col-6 flex justify-content-between">
            <label className="font-bold">Class </label>
            <span className="font-medium">{data.class}</span>
          </div>

          <div className="col-12 md:col-6 flex justify-content-between">
            <label className="font-bold ">DOB </label>
            <span className="font-medium">10th May,1998</span>
          </div>
          <div className="col-12 md:col-6 flex justify-content-between">
            <label className="font-bold">Role </label>
            <span className="font-medium">{data.role}</span>
          </div>
        </div>
        <div className="col-12 md:col-4">
          <Image
            src="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg"
            zoomSrc="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg"
            alt="Image"
            width="200"
            height="200"
            preview
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDialoge;
