export type Time = "year" | "month" | "week" | "day" | "hour" | "minute"
const timeTitles: Time[] = ["year", "month", "week", "day", "hour", "minute"];

export const timeValues: Record<Time, number> = {
    minute: 60_000,
    hour: 3_600_000,
    day: 86_400_000,
    week: 604_800_000,
    month: 2_592_000_000,
    year: 31_536_000_000
}

export const getTime = (timestamp: number): { time: Time, diff: number } => {
    const diff = Date.now() - timestamp;

    const minutes = Math.floor(diff / timeValues["minute"]);
    const hours = Math.floor(diff / timeValues["hour"]);
    const days = Math.floor(diff / timeValues["day"]);
    const weeks = Math.floor(diff / timeValues["week"]);
    const months = Math.floor(diff / timeValues["month"]);
    const years = Math.floor(diff / timeValues["year"]);

    const timeArr = [years, months, weeks, days, hours, minutes];

    for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] >= 1) {
            const timeTitle = timeTitles[i];
            const timeDiff = timeArr[i];

            return { time: timeTitle, diff: timeDiff };
        }
    }

    return { time: "minute", diff: 0 };
};