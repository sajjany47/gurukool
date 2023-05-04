import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";
import React, { useState } from "react";

const CardComponent = (props) => {
  const [value, setValue] = useState(0);
  return (
    <Card
      title={props.title}
      subTitle={props.subTitle}
      className="md:w-20rem m-4"
    >
      <img alt={props.title} src={props.img} />
      <Rating
        value={value}
        onChange={(e) => setValue(e.value)}
        cancel={false}
      />
      <div className="flex flex-wrap justify-content-end gap-2">
        <Button label="Done" icon="pi pi-check" />
        <Button
          label="Change"
          icon="pi pi-spin pi-cog"
          className="p-button-outlined p-button-secondary"
        />
      </div>
    </Card>
  );
};

export default CardComponent;
