import dayjs from "dayjs";

export function formatDiff(start: Date | string | dayjs.Dayjs, end: Date | string | dayjs.Dayjs): string {
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    if (!startDate.isValid() || !endDate.isValid()) return "--";

    const diffInMinutes = endDate.diff(startDate, "minute");
    const days = Math.floor(diffInMinutes / (60 * 24));
    const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
    const minutes = diffInMinutes % 60;

    const pad = (n: number) => String(n).padStart(2, "0");

    return `${pad(days)}d ${pad(hours)}:${pad(minutes)}`;
}
