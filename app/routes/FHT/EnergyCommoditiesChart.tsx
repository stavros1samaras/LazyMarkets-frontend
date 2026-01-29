import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";
import ChartRangeControl from "./ChartRangeControl";

interface EnergyCommoditiesChartProps {
    energydata: Record<string, any>;
}

export default function EnergyCommoditiesChart({ energydata, earlySigns, eventDate, phaseConclusion, children }: any) {
    const cl = energydata["CL%3DF"][0].data;
    const ng = energydata["NG%3DF"][0].data;
    const bz = energydata["BZ%3DF"][0].data;

    const baseSeries = cl;

    const chartData = baseSeries.map((point: any, i: number) => ({
        date: point.date,
        WTI: cl[i].close,
        NG: ng[i].close,
        Brent: bz[i].close,
    }));

    const [currentChartData, setcurrentChartData] = useState(chartData);

    return (
        <>
            <div className="flex items-center justify-between">
                <span>
                    {children}
                </span>
                <ChartRangeControl
                    chartData={chartData}
                    eventDate={eventDate}
                    setcurrentChartData={setcurrentChartData}
                />
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={currentChartData}>
                    <XAxis dataKey="date" interval={50} textAnchor="start" />

                    <YAxis width={29}
                        yAxisId="left"
                        orientation="left"
                        stroke="#8884d8"
                    />

                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#82ca9d"
                    />

                    <Tooltip />
                    <Legend />

                    <ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} label={{ value: "Event", position: "top" }} />
                    <ReferenceLine x={earlySigns} yAxisId="left" stroke="red" strokeWidth={1} label={{ value: "Early Signs", position: "top" }} />
                    <ReferenceLine x={phaseConclusion} yAxisId="left" stroke="red" strokeWidth={1} label={{ value: "Conclusion", position: "top" }} />

                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="WTI"
                        dot={false}
                        stroke="#8884d8"
                        isAnimationActive={false}
                    />

                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="NG"
                        dot={false}
                        stroke="#82ca9d"
                        isAnimationActive={false}
                    />

                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Brent"
                        dot={false}
                        stroke="#ff7300"
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
