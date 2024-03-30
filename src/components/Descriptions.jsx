import React from "react";
import './descriptions.css';
// import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fc";
// import { BiHappy } from "react-icons/bi";
// import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
const Descriptions = ({weather, units}) => {

  const tempUnit = units === "metric" ? "°C" : "°F";
  const widnUnit = units === "metric" ? "m/s" : "m/h";
  const cards = [
    {
      id: 1,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
        title: "max",
        data: weather.temp_max.toFixed(),
        unit: tempUnit,
    },
    {
      id: 3,
        title: "feels like",
        data: weather.feels_like.toFixed(),
        unit: tempUnit,
    },
    {
      id: 4,
        title: "pressure",
        data: weather.pressure.toFixed(),
        unit: "hPa",
    },
    {
      id: 5,
        title: "humidity",
        data: weather.humidity.toFixed(),
        unit: "%",
    },
    {
      id: 6,
        title: "wind speed",
        data: weather.speed.toFixed(),
        unit: tempUnit,
    },
  ]


  
  return (
    <div className="section section_descriptions">
      {cards.map(({id, title, data, unit}) => {
        return (
          <div className="card" key={id}>
            <div className="description_card-icon">
              <small>{title}</small>
            </div>
            <h2>{data} {unit}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Descriptions;
