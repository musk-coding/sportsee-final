import React, { useState, useEffect } from "react";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

import { Colors } from "../shared/colors";

const labelsMap = new Map();

labelsMap["kilogram"] = "Poids (kg)";
labelsMap["calories"] = "Calories brûlées (kCal)";

const renderColorfulLegendText = (value) => {
  return (
    <span
      style={{
        color: "#74798C",
        fontWeight: 500,
        fontSize: 14,
        marginRight: 32,
        fontFamily: "Roboto",
      }}
    >
      {value}
    </span>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  console.log(
    `active = ${active} ; payload = ${JSON.stringify(
      payload
    )} ; label = ${label} `
  );
  if (active && payload && payload.length) {
    const weight = payload[0].value;
    const calories = payload[1].value;
    return (
      <div className="my-tooltip">
        <p>{weight}kg</p>
        <p>{calories}Kcal</p>
      </div>
    );
  }

  return null;
};

function Activity(props) {
  const [activity, setActivity] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setActivity(
      props.data.map((o, i) => {
        return { ...o, day: (i + 1).toString() };
      })
    );
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BarChart width={835} height={320} data={activity}>
        <Legend
          align="right"
          verticalAlign="top"
          wrapperStyle={{ top: -15 }}
          iconSize={8}
          formatter={renderColorfulLegendText}
        />

        <CartesianGrid strokeDasharray="1" vertical={false} fill="#FBFBFB" />
        <XAxis dataKey="day" axisLine={true} tickLine={false} />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <Tooltip isAnimationActive={false} content={<CustomTooltip />} />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill={Colors.DARK}
          barSize={7}
          radius={[7, 7, 0, 0]}
          legendType="circle"
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill={Colors.RED}
          barSize={7}
          radius={[7, 7, 0, 0]}
          legendType="circle"
        />
      </BarChart>
    </div>
  );
}

export default Activity;
