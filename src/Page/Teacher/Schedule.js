import React, { useEffect, useState } from "react";
import CardComponent from "../../component/CardComponent";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";

function Schedule() {
  const cities = [
    { name: "Monday", code: "Monday" },
    { name: "Tuesday", code: "Tuesday" },
    { name: "Wednesday", code: "Wednesday" },
    { name: "Thursday", code: "Thursday" },
    { name: "Friday", code: "Friday" },
    { name: "Saturday", code: "Saturday" },
    { name: "Sunday", code: "Sunday" },
  ];

  let today = moment(new Date()).format("dddd, MMMM Do YYYY");
  const dayName = moment(new Date()).format("dddd");

  const filterDay = cities.filter((item) => item.name === dayName);

  const [selectedCity, setSelectedCity] = useState(filterDay[0]);
  const [filterSchedule, setfilterSchedule] = useState([]);

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
    {
      subject: "Physic",
      class: "12",
      Day: "Tuesday",
      time: "10-11.30",
      img: "https://www.tntech.edu/cas/images/physics/physics_icon.jpg",
    },
    {
      subject: "Chemistry",
      class: "10",
      Day: "Tuesday",
      time: "11.45-12.30",
      img: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
    },
    {
      subject: "Math",
      class: "11",
      Day: "Tuesday",
      time: "12.45-13.30",
      img: "https://img.freepik.com/premium-vector/realistic-math-chalkboard-background_23-2148154055.jpg?w=2000",
    },
    {
      subject: "History",
      class: "9",
      Day: "Tuesday",
      time: "14-14.45",
      img: "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
    },
    {
      subject: "Life Science",
      class: "7",
      Day: "Tuesday",
      time: "15-15.45",
      img: "https://i.ytimg.com/vi/9gBH5xAk3G4/maxresdefault.jpg",
    },
    {
      subject: "Hindi",
      class: "8",
      Day: "Tuesday",
      time: "16-16.45",
      img: "https://unvoicedmedia.in/wp-content/uploads/2021/05/hindi-calligraphy.jpg",
    },
    {
      subject: "Physic",
      class: "12",
      Day: "Wednesday",
      time: "10-11.30",
      img: "https://www.tntech.edu/cas/images/physics/physics_icon.jpg",
    },
    {
      subject: "Chemistry",
      class: "10",
      Day: "Wednesday",
      time: "11.45-12.30",
      img: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
    },
    {
      subject: "Math",
      class: "11",
      Day: "Wednesday",
      time: "12.45-13.30",
      img: "https://img.freepik.com/premium-vector/realistic-math-chalkboard-background_23-2148154055.jpg?w=2000",
    },
    {
      subject: "History",
      class: "9",
      Day: "Wednesday",
      time: "14-14.45",
      img: "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
    },
    {
      subject: "Life Science",
      class: "7",
      Day: "Wednesday",
      time: "15-15.45",
      img: "https://i.ytimg.com/vi/9gBH5xAk3G4/maxresdefault.jpg",
    },
    {
      subject: "Hindi",
      class: "8",
      Day: "Wednesday",
      time: "16-16.45",
      img: "https://unvoicedmedia.in/wp-content/uploads/2021/05/hindi-calligraphy.jpg",
    },
    {
      subject: "Physic",
      class: "12",
      Day: "Thursday",
      time: "10-11.30",
      img: "https://www.tntech.edu/cas/images/physics/physics_icon.jpg",
    },
    {
      subject: "Chemistry",
      class: "10",
      Day: "Thursday",
      time: "11.45-12.30",
      img: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
    },
    {
      subject: "Math",
      class: "11",
      Day: "Thursday",
      time: "12.45-13.30",
      img: "https://img.freepik.com/premium-vector/realistic-math-chalkboard-background_23-2148154055.jpg?w=2000",
    },
    {
      subject: "History",
      class: "9",
      Day: "Thursday",
      time: "14-14.45",
      img: "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
    },
    {
      subject: "Life Science",
      class: "7",
      Day: "Thursday",
      time: "15-15.45",
      img: "https://i.ytimg.com/vi/9gBH5xAk3G4/maxresdefault.jpg",
    },
    {
      subject: "Hindi",
      class: "8",
      Day: "Thursday",
      time: "16-16.45",
      img: "https://unvoicedmedia.in/wp-content/uploads/2021/05/hindi-calligraphy.jpg",
    },
    {
      subject: "Physic",
      class: "12",
      Day: "Friday",
      time: "10-11.30",
      img: "https://www.tntech.edu/cas/images/physics/physics_icon.jpg",
    },
    {
      subject: "Chemistry",
      class: "10",
      Day: "Friday",
      time: "11.45-12.30",
      img: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
    },
    {
      subject: "Math",
      class: "11",
      Day: "Friday",
      time: "12.45-13.30",
      img: "https://img.freepik.com/premium-vector/realistic-math-chalkboard-background_23-2148154055.jpg?w=2000",
    },
    {
      subject: "History",
      class: "9",
      Day: "Friday",
      time: "14-14.45",
      img: "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
    },
    {
      subject: "Life Science",
      class: "7",
      Day: "Friday",
      time: "15-15.45",
      img: "https://i.ytimg.com/vi/9gBH5xAk3G4/maxresdefault.jpg",
    },
    {
      subject: "Hindi",
      class: "8",
      Day: "Friday",
      time: "16-16.45",
      img: "https://unvoicedmedia.in/wp-content/uploads/2021/05/hindi-calligraphy.jpg",
    },
    {
      subject: "Physic",
      class: "12",
      Day: "Saturday",
      time: "10-11.30",
      img: "https://www.tntech.edu/cas/images/physics/physics_icon.jpg",
    },
    {
      subject: "Chemistry",
      class: "10",
      Day: "Saturday",
      time: "11.45-12.30",
      img: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
    },
    {
      subject: "Math",
      class: "11",
      Day: "Saturday",
      time: "12.45-13.30",
      img: "https://img.freepik.com/premium-vector/realistic-math-chalkboard-background_23-2148154055.jpg?w=2000",
    },
    {
      subject: "History",
      class: "9",
      Day: "Saturday",
      time: "14-14.45",
      img: "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
    },
    {
      subject: "Life Science",
      class: "7",
      Day: "Saturday",
      time: "15-15.45",
      img: "https://i.ytimg.com/vi/9gBH5xAk3G4/maxresdefault.jpg",
    },
    {
      subject: "Hindi",
      class: "8",
      Day: "Saturday",
      time: "16-16.45",
      img: "https://unvoicedmedia.in/wp-content/uploads/2021/05/hindi-calligraphy.jpg",
    },
  ];

  useEffect(() => {
    let filterData = scheduleData.filter(
      (item) => item.Day === selectedCity.name
    );
    setfilterSchedule(filterData);
  }, [selectedCity]);

  const handleChange = (e) => {
    setSelectedCity(e);
  };

  return (
    <div className="col-12">
      <div className="grid">
        <div className="col-9">
          <h3>{today}</h3>
        </div>
        <div className="col-3">
          <Dropdown
            value={selectedCity}
            onChange={(e) => handleChange(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a Day"
            className="w-full md:w-14rem"
          />
        </div>
      </div>

      <div className="grid">
        {filterSchedule &&
          filterSchedule.map((item, index) => (
            <div className="col-12 md:col-4">
              <CardComponent
                title={`${item.subject} (Class ${item.class})`}
                subTitle={`${item.Day} ${item.time} `}
                img={item.img}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Schedule;
