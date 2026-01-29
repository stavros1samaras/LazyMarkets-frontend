export function getYear(yearsToSubtract: number = 0): number {
    const yearString: string = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Athens",
        year: "numeric",
    });

    let currentYear: number = parseInt(yearString, 10);

    currentYear = currentYear - yearsToSubtract;

    return currentYear;
}