import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";
import ChartRangeControl from "./ChartRangeControl";

interface ForexChartProps {
    forexData: Record<string, any>;
}

export default function CurrenciesCommoditiesUSChart({ forexData, earlySigns, eventDate, phaseConclusion, children }: any) {
    const eur = forexData["EUR%3DX"][0].data;
    const rub = forexData["RUB%3DX"][0].data;
    const cny = forexData["CNY%3DX"][0].data;

    const baseSeries = eur;

    const chartData = baseSeries.map((point: any, i: number) => ({
        date: point.date,
        EUR: eur[i].close,
        RUB: rub[i].close,
        CNY: cny[i].close,
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

                    <YAxis yAxisId="left" />

                    <YAxis yAxisId="right" orientation="right" />

                    <Tooltip />
                    <Legend />

                    <ReferenceLine
                        x={eventDate}
                        yAxisId="left"
                        stroke="red"
                        strokeWidth={1}
                        label={{ value: "Event", position: "top" }}
                    />

                    <ReferenceLine
                        x={earlySigns}
                        yAxisId="left"
                        stroke="red"
                        strokeWidth={1}
                        label={{ value: "Event", position: "top" }}
                    />

                    <ReferenceLine
                        x={phaseConclusion}
                        yAxisId="left"
                        stroke="red"
                        strokeWidth={1}
                        label={{ value: "Event", position: "top" }}
                    />

                    <Line type="monotone" dataKey="EUR" dot={false} stroke="#1f77b4" yAxisId="left" isAnimationActive={false} />
                    <Line type="monotone" dataKey="CNY" dot={false} stroke="#2ca02c" yAxisId="left" isAnimationActive={false} />

                    <Line type="monotone" dataKey="RUB" dot={false} stroke="#ff7f0e" yAxisId="right" isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
