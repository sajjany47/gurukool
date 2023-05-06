import moment from "moment";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";
import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";

const CardComponent = (props) => {
  const toast = useRef(null);
  const [value, setValue] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [startDisable, setStartDisable] = useState(false);
  const [endDisable, setEndDisable] = useState(true);
  const [submitDisable, setSubmitDisable] = useState(true);

  const handleStart = () => {
    setStartTime(new Date());
    setStartDisable(true);
    setEndDisable(false);
    setSubmitDisable(true);
    toast.current.show({
      severity: "warn",
      summary: "Start Time",
      detail: "Your Class Time Start Now",
      life: 3000,
    });
  };

  const handleEnd = () => {
    setEndTime(new Date());
    setEndDisable(true);
    setSubmitDisable(false);
    toast.current.show({
      severity: "info",
      summary: "End Time",
      detail: "Your Class Time Over",
      life: 3000,
    });
  };

  const handleSubmit = () => {
    const classTime = moment
      .utc(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss")))
      .format("ss");

    const submitData = {
      startTime: startTime,
      endTime: endTime,
      duration: classTime,
      rating: value,
    };
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Your Review Submit Successfully",
      life: 3000,
    });
    console.log(submitData);
  };

  return (
    <>
      <Toast ref={toast} />
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
          <Button label="Start" onClick={handleStart} disabled={startDisable} />
          <Button
            label="Done"
            severity="danger"
            onClick={handleEnd}
            disabled={endDisable}
          />
          <Button
            label="Submit"
            severity="success"
            onClick={handleSubmit}
            disabled={submitDisable}
          />
        </div>
      </Card>
    </>
  );
};

export default CardComponent;
