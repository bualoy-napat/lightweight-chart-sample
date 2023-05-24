import { useEffect, useRef } from "react";
import {
  createChart,
  IChartApi,
  CrosshairMode
  // ChartOptions
} from "lightweight-charts";

const chartSettings = {
  width: 600,
  height: 300,
  layout: {
    backgroundColor: "#000000",
    textColor: "rgba(255, 255, 255, 0.9)"
  },
  grid: {
    vertLines: {
      color: "rgba(197, 203, 206, 0.5)"
    },
    horzLines: {
      color: "rgba(197, 203, 206, 0.5)"
    }
  },
  crosshair: {
    mode: CrosshairMode.Normal
  },
  priceScale: {
    borderColor: "rgba(197, 203, 206, 0.8)"
  },
  timeScale: {
    borderColor: "rgba(197, 203, 206, 0.8)",
    barSpacing: 15
    // fixLeftEdge: true,
  }
};

function App() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartContainer2Ref = useRef<HTMLDivElement>(null);
  const chartContainer3Ref = useRef<HTMLDivElement>(null);
  const chartContainer4Ref = useRef<HTMLDivElement>(null);
  const chartContainer5Ref = useRef<HTMLDivElement>(null);
  const chartContainer6Ref = useRef<HTMLDivElement>(null);
  const chartContainer7Ref = useRef<HTMLDivElement>(null);
  const chartContainer8Ref = useRef<HTMLDivElement>(null);
  const chartContainer9Ref = useRef<HTMLDivElement>(null);
  const chartContainer10Ref = useRef<HTMLDivElement>(null);
  const chartContainer11Ref = useRef<HTMLDivElement>(null);
  const chartContainer12Ref = useRef<HTMLDivElement>(null);
  const chartContainer13Ref = useRef<HTMLDivElement>(null);
  const chartContainer14Ref = useRef<HTMLDivElement>(null);
  const chartContainer15Ref = useRef<HTMLDivElement>(null);
  const chartContainer16Ref = useRef<HTMLDivElement>(null);
  const chartContainer17Ref = useRef<HTMLDivElement>(null);
  const chartContainer18Ref = useRef<HTMLDivElement>(null);
  const chart = useRef<IChartApi>();
  const chart2 = useRef<IChartApi>();
  const chart3 = useRef<IChartApi>();
  const chart4 = useRef<IChartApi>();
  const chart5 = useRef<IChartApi>();
  const chart6 = useRef<IChartApi>();
  const chart7 = useRef<IChartApi>();
  const chart8 = useRef<IChartApi>();
  const chart9 = useRef<IChartApi>();
  const chart10 = useRef<IChartApi>();
  const chart11 = useRef<IChartApi>();
  const chart12 = useRef<IChartApi>();
  const chart13 = useRef<IChartApi>();
  const chart14 = useRef<IChartApi>();
  const chart15 = useRef<IChartApi>();
  const chart16 = useRef<IChartApi>();
  const chart17 = useRef<IChartApi>();
  const chart18 = useRef<IChartApi>();
  useEffect(() => {
    if (!chartContainerRef.current || !chartContainer2Ref.current
        || !chartContainer3Ref.current || !chartContainer4Ref.current
        || !chartContainer5Ref.current || !chartContainer6Ref.current
        || !chartContainer7Ref.current || !chartContainer8Ref.current
        || !chartContainer9Ref.current || !chartContainer10Ref.current
        || !chartContainer11Ref.current || !chartContainer12Ref.current
        || !chartContainer13Ref.current || !chartContainer14Ref.current
        || !chartContainer15Ref.current || !chartContainer16Ref.current
        || !chartContainer17Ref.current || !chartContainer18Ref.current) {
      return;
    }
    chart.current = createChart(chartContainerRef.current, chartSettings);
    chart2.current = createChart(chartContainer2Ref.current, chartSettings);
    chart3.current = createChart(chartContainer3Ref.current, chartSettings);
    chart4.current = createChart(chartContainer4Ref.current, chartSettings);
    chart5.current = createChart(chartContainer5Ref.current, chartSettings);
    chart6.current = createChart(chartContainer6Ref.current, chartSettings);
    chart7.current = createChart(chartContainer7Ref.current, chartSettings);
    chart8.current = createChart(chartContainer8Ref.current, chartSettings);
    chart9.current = createChart(chartContainer9Ref.current, chartSettings);
    chart10.current = createChart(chartContainer10Ref.current, chartSettings);
    chart11.current = createChart(chartContainer11Ref.current, chartSettings);
    chart12.current = createChart(chartContainer12Ref.current, chartSettings);
    chart13.current = createChart(chartContainer13Ref.current, chartSettings);
    chart14.current = createChart(chartContainer14Ref.current, chartSettings);
    chart15.current = createChart(chartContainer15Ref.current, chartSettings);
    chart16.current = createChart(chartContainer16Ref.current, chartSettings);
    chart17.current = createChart(chartContainer17Ref.current, chartSettings);
    chart18.current = createChart(chartContainer18Ref.current, chartSettings);
    const lineSeries = chart.current.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries2 = chart2.current.addLineSeries();
    lineSeries2.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries3 = chart3.current.addLineSeries();
    lineSeries3.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries4 = chart4.current.addLineSeries();
    lineSeries4.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries5 = chart5.current.addLineSeries();
    lineSeries5.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries6 = chart6.current.addLineSeries();
    lineSeries6.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries7 = chart7.current.addLineSeries();
    lineSeries7.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries8 = chart8.current.addLineSeries();
    lineSeries8.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries9 = chart9.current.addLineSeries();
    lineSeries9.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries10 = chart10.current.addLineSeries();
    lineSeries10.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries11 = chart11.current.addLineSeries();
    lineSeries11.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries12 = chart12.current.addLineSeries();
    lineSeries12.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries13 = chart13.current.addLineSeries();
    lineSeries13.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries14 = chart14.current.addLineSeries();
    lineSeries14.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries15 = chart15.current.addLineSeries();
    lineSeries15.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries16 = chart16.current.addLineSeries();
    lineSeries16.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
    const lineSeries17 = chart17.current.addLineSeries();
    lineSeries17.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
    const lineSeries18 = chart18.current.addLineSeries();
    lineSeries18.setData([
      { time: "2019-04-11", value: 180.01 },
      { time: "2019-04-12", value: 196.63 },
      { time: "2019-04-13", value: 176.64 },
      { time: "2019-04-14", value: 181.89 },
      { time: "2019-04-15", value: 174.43 },
      { time: "2019-04-16", value: 180.01 },
      { time: "2019-04-17", value: 196.63 },
      { time: "2019-04-18", value: 176.64 },
      { time: "2019-04-19", value: 181.89 },
      { time: "2019-04-20", value: 174.43 }
    ]);
  }, []);

  const getSubsHandler = (c: "c1" | "c2") => () => {
    if (!chart.current || !chart2.current) {
      return;
    }

    // NOTE: the hacky part, not public chart api, but the bar
    // distances is available to get from here
    const barSpacingC1 =
        (chart.current as any)?.TM?.Da?.hl ||
        (chart.current as any)?.TM?.Da?.tl?.ws ||
        chartSettings.timeScale.barSpacing;
    const barSpacingC2 =
        (chart2.current as any)?.TM?.Da?.hl ||
        (chart2.current as any)?.TM?.Da?.tl?.ws ||
        chartSettings.timeScale.barSpacing;
    const rightOffsetC1 = (chart.current as any)?.TM?.Da?.sl;
    const rightOffsetC2 = (chart2.current as any)?.TM?.Da?.sl;
    if (barSpacingC1 !== barSpacingC2 || rightOffsetC1 !== rightOffsetC2) {
      if (c === "c1") {
        chart2.current.timeScale().applyOptions({
          rightOffset: rightOffsetC1,
          barSpacing: barSpacingC1
        });
      } else {
        chart.current.timeScale().applyOptions({
          rightOffset: rightOffsetC2,
          barSpacing: barSpacingC2
        });
      }
    }
  };
  const subsHandler = getSubsHandler("c1");
  const subsHandler2 = getSubsHandler("c2");
  const onMouseEnter = () => {
    chart.current?.timeScale().subscribeVisibleLogicalRangeChange(subsHandler);
  };
  const onMouseLeave = () => {
    chart.current
        ?.timeScale()
        .unsubscribeVisibleLogicalRangeChange(subsHandler);
  };

  const onMouseEnter2 = () => {
    chart2.current
        ?.timeScale()
        .subscribeVisibleLogicalRangeChange(subsHandler2);
  };
  const onMouseLeave2 = () => {
    chart2.current
        ?.timeScale()
        .unsubscribeVisibleLogicalRangeChange(subsHandler2);
  };

  return (
      <div className="App">
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={chartContainerRef}
            id="tt1"
            key="tt1"
            style={{ borderBottom: "1px solid transparent" }}
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer2Ref}
            id="tt2"
            key="tt2"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer3Ref}
            id="tt3"
            key="tt3"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer4Ref}
            id="tt4"
            key="tt4"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer5Ref}
            id="tt5"
            key="tt5"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer6Ref}
            id="tt6"
            key="tt6"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer7Ref}
            id="tt7"
            key="tt7"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer8Ref}
            id="tt8"
            key="tt8"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer9Ref}
            id="tt9"
            key="tt9"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer10Ref}
            id="tt10"
            key="tt10"
        />
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={chartContainer11Ref}
            id="tt11"
            key="tt11"
            style={{ borderBottom: "1px solid transparent" }}
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer12Ref}
            id="tt12"
            key="tt12"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer13Ref}
            id="tt13"
            key="tt13"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer14Ref}
            id="tt14"
            key="tt14"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer15Ref}
            id="tt15"
            key="tt15"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer16Ref}
            id="tt16"
            key="tt16"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer17Ref}
            id="tt17"
            key="tt17"
        />
        <div
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            ref={chartContainer18Ref}
            id="tt18"
            key="tt18"
        />
      </div>
  );
}

export default App;
