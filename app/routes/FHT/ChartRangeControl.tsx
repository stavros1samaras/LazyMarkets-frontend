import { ChartTabs } from "~/components/ChartTabs";

type ChartRangeControlProps = {
    chartData: any[];
    eventDate: string;
    setcurrentChartData: (data: any[]) => void;
    children?: React.PropsWithChildren
};

export default function ChartRangeControl({ chartData, eventDate, setcurrentChartData, children }: ChartRangeControlProps) {

    const sliceByRange = (daysBefore: number, daysAfter: number) => {
        const eventIndex = chartData.findIndex(
            (item: any) => item.date === eventDate
        );

        const start = Math.max(eventIndex - daysBefore, 0);
        const end = Math.min(eventIndex + daysAfter + 1, chartData.length);

        setcurrentChartData(chartData.slice(start, end));
    };

    const setOriginalRange = () => {
        setcurrentChartData(chartData);
    };

    return (
        <>
            <ChartTabs>
                <button onClick={() => sliceByRange(3, 3)} className="m-[2px]">1w</button>
                <button onClick={() => sliceByRange(7, 7)} className="m-[2px]">2w</button>
                <button onClick={() => sliceByRange(11, 11)} className="m-[2px]">3w</button>
                <button onClick={() => sliceByRange(14, 14)} className="m-[2px]">1m</button>
                <button onClick={() => sliceByRange(30, 30)} className="m-[2px]">2m</button>
                <button onClick={() => sliceByRange(45, 45)} className="m-[2px]">3m</button>
                <button onClick={() => sliceByRange(90, 90)} className="m-[2px]">6m</button>
                <button onClick={setOriginalRange} className="m-[2px]">1y</button>
            </ChartTabs>
        </>
    );
}
