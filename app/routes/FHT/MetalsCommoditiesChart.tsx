import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";
import ChartRangeControl from "./ChartRangeControl";

interface PreciousMetalsChartProps {
    metalsData: Record<string, any>;
}

export default function PreciousMetalsChart({ metalsData, earlySigns, eventDate, phaseConclusion, children }: any) {
    const gold = metalsData["GC%3DF"][0].data;
    const silver = metalsData["SI%3DF"][0].data;
    const copper = metalsData["HG%3DF"][0].data;

    const baseSeries = gold;

    const chartData = baseSeries.map((point: any, i: number) => ({
        date: point.date,
        Gold: gold[i].close,
        Silver: silver[i].close,
        Copper: copper[i].close,
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

                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#FFD700"
                    />

                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#888"
                    />

                    <Tooltip />
                    <Legend />

                    <ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} label={{ value: "Event", position: "top" }} />
                    <ReferenceLine x={earlySigns} yAxisId="left" stroke="red" strokeWidth={1} label={{ value: "Early Signs", position: "top" }} />
                    <ReferenceLine x={phaseConclusion} yAxisId="left" stroke="red" strokeWidth={1} label={{ value: "Conclusion", position: "top" }} />

                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Gold"
                        dot={false}
                        stroke="#FFD700"
                        isAnimationActive={false}
                    />

                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="Silver"
                        dot={false}
                        stroke="#C0C0C0"
                        isAnimationActive={false}
                    />

                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="Copper"
                        dot={false}
                        stroke="#B87333"
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
