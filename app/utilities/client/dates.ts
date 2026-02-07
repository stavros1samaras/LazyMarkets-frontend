import type { date } from "~/types/date";


export const findPreviousYearDate = (): date => {

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

    const startDate: string = newYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
    return ({ startDate: startDate, interval: 50 })
}

export const currentDate = (): string => {
    const currentFullDate = new Date();
    let date: (number | string) = currentFullDate.getDate();
    let month: (number | string) = currentFullDate.getMonth() + 1;
    const year: (number | string) = currentFullDate.getFullYear();
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    const currentDate: string = year.toString() + "-" + month.toString() + "-" + date.toString();
    return (currentDate)
}

export const findPreviousMonthDate = (): { startDate: string; interval: number } => {

    const currentFullDate = new Date();

    let currentYear = currentFullDate.getFullYear();
    let currentMonth = currentFullDate.getMonth();
    let currentDay = currentFullDate.getDate();

    let previousMonth = currentMonth - 1;
    let previousYear = currentYear;

    if (previousMonth < 0) {
        previousMonth = 11;
        previousYear -= 1;
    }

    const daysInPreviousMonth = new Date(previousYear, previousMonth + 1, 0).getDate();

    if (currentDay > daysInPreviousMonth) {
        currentDay = daysInPreviousMonth;
    }

    const previousMonthDate = new Date(previousYear, previousMonth, currentDay);

    const year = previousMonthDate.getFullYear();
    const month = (previousMonthDate.getMonth() + 1).toString().padStart(2, "0");
    const day = previousMonthDate.getDate().toString().padStart(2, "0");

    const startDate = `${year}-${month}-${day}`;

    return { startDate: startDate, interval: 10 };
};




export function sortByDate(array: any[], keys: string[], earlySigns: string, eventDate: string, phaseConclusion: string) {

    const copy = array.slice();

    const dates = [earlySigns, eventDate, phaseConclusion];

    let added = false;

    dates.forEach(date => {

        if (!date) return;

        const exists = copy.some(item => item.date === date);

        if (!exists) {
            const newItem: any = {
                date
            };

            keys.forEach(key => {
                newItem[key] = null;
            });

            copy.push(newItem);
            added = true;
        }
    });

    if (!added) {
        return copy;
    }

    return copy.sort((a, b) => {

        const [dA, mA, yA] = a.date.split("-");
        const [dB, mB, yB] = b.date.split("-");

        const dateA = new Date(2000 + +yA, +mA - 1, +dA);
        const dateB = new Date(2000 + +yB, +mB - 1, +dB);

        return dateA.getTime() - dateB.getTime();
    });
}


