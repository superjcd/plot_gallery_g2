import { Chart } from "@antv/g2";
import { useEffect, useRef } from "react";

export default function Plot() {
  const container = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container) {
    const chart = new Chart({
      container,
      autoFit: true,
    });

    chart.title({
      title: "归一化折线图",
      subtitle: "只显示变化率, 也可以用作展示策略收益",
    });
    chart
      .line()
      .data({
        type: "fetch",
        value: "https://assets.antv.antgroup.com/g2/indices.json",
      })
      .transform({ type: "normalizeY", basis: "first", groupBy: "color" })
      .encode("x", (d) => new Date(d.Date))
      .encode("y", "Close")
      .encode("color", "Symbol")
      .scale("y", { type: "log" })
      .axis("y", { title: "↑ Change in price (%)" })
      .label({
        text: "Symbol",
        selector: "last",
        fontSize: 10,
      })
      .tooltip({ channel: "y", valueFormatter: ".1f" });

    // 渲染可视化
    chart.render();

    return chart;
  }


  return (
    <div className="plot">
      <div ref={container}></div>
    </div>
  );
}
