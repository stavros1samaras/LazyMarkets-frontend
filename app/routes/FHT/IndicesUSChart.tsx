import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";
import ChartRangeControl from "./ChartRangeControl";

export default function IndicesUSChart({ indicesUSdata, earlySigns, eventDate, phaseConclusion, children }: any) {
    const gspc = indicesUSdata["%5EGSPC"][0].data;
    const dji = indicesUSdata["%5EDJI"][0].data;
    const ixic = indicesUSdata["%5EIXIC"][0].data;
    // const rut = indicesUSdata["%5ERUT"][0].data;

    const baseSeries = gspc;

    const chartData = baseSeries.map((point: any, i: number) => ({
        date: point.date,
        GSPC: gspc[i].close,
        DJI: dji[i].close,
        IXIC: ixic[i].close,
        // RUT: rut[i].close,
    }));

    console.log(eventDate)

    const [currentChartData, setcurrentChartData] = useState(chartData);

    return (
        <>
            <div className="flex items-center justify-between pb-3">
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
                <LineChart data={currentChartData} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                    <XAxis dataKey="date" interval={100} textAnchor="start" height={20} />
                    <YAxis width={50} />
                    <Tooltip />

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

                    <Line type="monotone" dataKey="GSPC" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="DJI" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="IXIC" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="RUT" dot={false} isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer >
        </>
    );
}

