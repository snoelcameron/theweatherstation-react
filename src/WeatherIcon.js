import React from "react";
import "./App.css";

export default function WeatherIcon(props) {
  let icon = "";
  if (props.icon === "01d" || props.icon === "01n") {
    icon = "images/suncircle.png";
  } else if (props.icon === "02n" || props.icon === "02d") {
    icon = "images/suncloudcircle.png";
  } else if (
    props.icon === "03d" ||
    props.icon === "03n" ||
    props.icon === "04d" ||
    props.icon === "04n" ||
    props.icon === "50d" ||
    props.icon === "50n"
  ) {
    icon = "images/cloudcircle.png";
  } else if (
    props.icon === "10n" ||
    props.icon === "10d" ||
    props.icon === "9n" ||
    props.icon === "9d"
  ) {
    icon = "images/raincircle.png";
  } else if (props.icon === "11d" || props.icon === "11n") {
    icon = "images/thundercircle.png";
  } else if (props.icon === "13d" || props.icon === "13n") {
    icon = "images/snowcircle.png";
  }

  return <img src={icon} alt="weather icon" />;
}
