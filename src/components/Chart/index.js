import "./style.css";
import { ChartBar } from "../ChartBar";

export const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => (
        <ChartBar {...dataPoint} maxValue={totalMaximum} key={index} />
      ))}
    </div>
  );
};
