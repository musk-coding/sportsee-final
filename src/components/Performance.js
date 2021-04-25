import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

function Performance(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={53} width="100%" height="100%" data={props.data}>
        <PolarGrid polarAnglesAxis={[]} />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Performance;
