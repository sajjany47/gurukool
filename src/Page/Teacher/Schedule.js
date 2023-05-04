import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";

function Schedule() {
  const scheduleData = [
    {
      subject: "Physic",
      class: "12",
      Day: "Monday",
      time: "10-11.30",
      img: "https://www.tntech.edu/cas/images/physics/physics_icon.jpg",
    },
    {
      subject: "Chemistry",
      class: "10",
      Day: "Monday",
      time: "11.45-12.30",
      img: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
    },
    {
      subject: "Math",
      class: "11",
      Day: "Monday",
      time: "12.45-13.30",
      img: "https://img.freepik.com/premium-vector/realistic-math-chalkboard-background_23-2148154055.jpg?w=2000",
    },
    {
      subject: "History",
      class: "9",
      Day: "Monday",
      time: "14-14.45",
      img: "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
    },
    {
      subject: "Life Science",
      class: "7",
      Day: "Monday",
      time: "15-15.45",
      img: "https://i.ytimg.com/vi/9gBH5xAk3G4/maxresdefault.jpg",
    },
    {
      subject: "Hindi",
      class: "8",
      Day: "Monday",
      time: "16-16.45",
      img: "https://unvoicedmedia.in/wp-content/uploads/2021/05/hindi-calligraphy.jpg",
    },
  ];
  const [value, setValue] = useState(null);
  // const header = (
  //   <>
  //     <img
  //       alt="Card"
  //       src="https://primefaces.org/cdn/primereact/images/usercard.png"
  //     />
  //     <Rating
  //       value={value}
  //       onChange={(e) => setValue(e.value)}
  //       cancel={false}
  //     />
  //   </>
  // );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Done" icon="pi pi-check" />
      <Button
        label="Change"
        icon="pi pi-spin pi-cog"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );

  const header = (item) => {
    return (
      <>
        <img alt={item.title} src={item.img} />
        <Rating
          value={value}
          onChange={(e) => setValue(e.value)}
          cancel={false}
        />
      </>
    );
  };

  return (
    <div className="col-12">
      <div className="grid">
        {scheduleData.map((item) => {
          return (
            <>
              <div className="col-12 md:4">
                <Card
                  title={item.subject}
                  subTitle={item.time}
                  footer={footer}
                  header={header}
                  className="md:w-20rem m-4"
                >
                  {/* <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p> */}
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
