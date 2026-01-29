import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";
import ChartRangeControl from "./ChartRangeControl";

export default function EUIndicesChart({ indicesEUdata, earlySigns, eventDate, phaseConclusion, children }: any) {
    const ftse = indicesEUdata["%5EFTSE"][0].data;
    const fchi = indicesEUdata["%5EFCHI"][0].data;
    const gdaxi = indicesEUdata["%5EGDAXI"][0].data;
    // const n100 = indicesEUdata["%5EN100"][0].data;

    const baseSeries = ftse;

    const chartData = baseSeries.map((point: any, i: number) => ({
        date: point.date,
        FTSE: ftse[i].close,
        FCHI: fchi[i].close,
        GDAXI: gdaxi[i].close,
        // N100: n100[i].close,
    }));

    const [currentChartData, setcurrentChartData] = useState(chartData);

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    {children}
                </div>

                <ChartRangeControl
                    chartData={chartData}
                    eventDate={eventDate}
                    setcurrentChartData={setcurrentChartData}
                />
            </div>


            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={currentChartData}>
                    <XAxis dataKey="date" interval={50} textAnchor="start" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <ReferenceLine
                        x={eventDate}
                        stroke="red"
                        strokeWidth={1}
                        label={{ value: "Event", position: "top" }}
                    />

                    <ReferenceLine
                        x={earlySigns}
                        stroke="red"
                        strokeWidth={1}
                        label={{ value: "Event", position: "top" }}
                    />

                    <ReferenceLine
                        x={phaseConclusion}
                        stroke="red"
                        strokeWidth={1}
                        label={{ value: "Event", position: "top" }}
                    />

                    <Line type="monotone" dataKey="FTSE" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="FCHI" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="GDAXI" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="N100" dot={false} isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
