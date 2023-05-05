import moment from "moment";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";
import React, { useState } from "react";

const CardComponent = (props) => {
  const [value, setValue] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleStart = () => {
    setStartTime(new Date());
  };

  const handleEnd = () => {
    setEndTime(new Date());
  };

  const handleSubmit = () => {
    console.log(startTime);
    console.log(endTime);

    const classTime = moment
      .utc(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss")))
      .format("ss");
  };

  return (
    <Card
      title={props.title}
      subTitle={props.subTitle}
      className="md:w-20rem m-4"
    >
      <img
        alt={props.title}
        src={props.img}
        style={{ height: "120px", width: "300px" }}
      />

      <Rating
        value={value}
        onChange={(e) => setValue(e.value)}
        cancel={false}
      />
      <div className="flex flex-wrap justify-content-end gap-3">
        <Button label="Start" onClick={handleStart} />
        <Button label="Done" severity="danger" onClick={handleEnd} />
        <Button label="Submit" severity="success" onClick={handleSubmit} />
      </div>
    </Card>
  );
};

export default CardComponent;
