import { useEffect, useState } from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Legend, } from 'recharts';


interface props {
    chartData: any
}


export default function PriceChart({ chartData }: props) {

    const maxData: any = chartData;

    const [data, setData] = useState([]);
    const [datesPerPeriod, setDatesPerPeriod] = useState<number>(500);

    useEffect(() => {
        setData(chartData);
    }, []);

    async function getData(startDate: string) {
        const url1 = `http://127.0.0.1:8000/ta/data/prices?ticker=BTC-USD&start=${startDate}&end=2025-09-26&interval=1d`;
        try {
            const response = await fetch(url1);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            // setBitPrices(result["BTC-USD"]);
            setData(result["BTC-USD"]);

        } catch (error: any) {
            console.error(error.message);
        }

    }

    const oneMonthPeriod = () => {

        const currentFullDate: Date = new Date();
        let currentDate: (number | string) = currentFullDate.getDate();

        if (currentDate < 10) {
            if (currentDate == 0) {
                currentDate = "00";
            }
            else {
                const currentDateCorrected: string = "0" + currentDate.toString();
                currentDate = currentDateCorrected;
            }
        }

        let currentMonth: (number | string) = currentFullDate.getMonth();

        if (currentMonth < 10) {
            if (currentMonth == 0) {
                currentMonth = "00";
            }
            else {
                const currentMonthCorrected: string = "0" + currentMonth.toString();
                currentMonth = currentMonthCorrected;
            }
        }

        const newYear: (number | string) = currentFullDate.getFullYear();

        const FirstDate = newYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
        console.log(FirstDate);

        setDatesPerPeriod(3);
        getData(FirstDate);

    }

    const findOneYearPeriod = (): void => {

        const currentFullDate = new Date();
        let currentDate: (number | string) = currentFullDate.getDate();

        if (currentDate < 10) {
            const currentDateCorrected: string = "0" + currentDate.toString();
            currentDate = currentDateCorrected;
        }

        let currentMonth: (number | string) = currentFullDate.getMonth() + 1;

        if (currentMonth < 10) {
            const currentMonthCorrected = "0" + currentMonth.toString();
            currentMonth = currentMonthCorrected;
        }

        const newYear: (number | string) = currentFullDate.getFullYear() - 1;

        const FirstDate: string = newYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
        console.log(FirstDate);

        setDatesPerPeriod(50);
        getData(FirstDate);

    }

    const maxPeriod = () => {
        setData(maxData);
        setDatesPerPeriod(500);
    }

    return (
        <>
            <div>
                <button onClick={oneMonthPeriod}>1 month</button>
                <button onClick={findOneYearPeriod}>1 year</button>
                <button onClick={maxPeriod}>max</button>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,

                    }}
                >
                    <CartesianGrid strokeDasharray="100 100" vertical={false} />
                    <XAxis dataKey="Date" interval={datesPerPeriod}
                        tickFormatter={(date, index) => {
                            if (index === 0) return ""; // krivei tin prwti timi
                            return date.split("T")[0]; // krata tin imerominia prin to T
                        }} />
                    <YAxis domain={['dataMin-1000', 'dataMax+1000']} />
                    <Tooltip />
                    <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" name="Bitcoin Price" />
                    <Legend verticalAlign="bottom" align="right" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}
