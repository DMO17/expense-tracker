import "./style.css";

export const ChartBar = ({ label, value, maxValue }) => {
  let barHeight = "0%";

  if (maxValue > 0) {
    barHeight = Math.round((value * 100) / maxValue) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
