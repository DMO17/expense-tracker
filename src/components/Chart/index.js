import "./style.css";
import { ChartBar } from "../ChartBar";

export const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => (
        <ChartBar {...dataPoint} maxValue={null} key={index} />
      ))}
    </div>
  );
};
