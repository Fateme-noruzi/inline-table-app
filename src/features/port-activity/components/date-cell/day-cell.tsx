import type { GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const DayCell = ({ row }: GridRenderCellParams) => {
    if (!row.fromDate) return "";
    const d = dayjs(row.fromDate);
    return d.isValid() ? d.format("ddd") : "";
}