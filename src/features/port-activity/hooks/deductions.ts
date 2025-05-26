


import dayjs from "dayjs";

export function Deductions(start: Date | string | dayjs.Dayjs, end: Date | string | dayjs.Dayjs, percentage: string): string {
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    if (!startDate.isValid() || !endDate.isValid()) return "--";

    const diffInMinutes = endDate.diff(startDate, "minute");
    const numeric = parseFloat(percentage);
    const PerResult = (numeric / 100) * diffInMinutes;
    const days = Math.floor(PerResult / (60 * 24));
    const hours = Math.floor((PerResult % (60 * 24)) / 60);
    const minutes = PerResult % 60;

    const pad = (n: number) => String(n).padStart(2, "0");

    return `${pad(days)}d ${pad(hours)}:${pad(minutes)}`;
}

