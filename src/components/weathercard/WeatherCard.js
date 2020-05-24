import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 20px auto;
    background: linear-gradient(to top, darkblue, blue);
    color: white;
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card className="card">
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
