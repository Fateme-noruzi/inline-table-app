import { formatDiff } from "../hooks/format-diff";
import { Deductions } from "../hooks/deductions";
import { ActionCell } from "./action-cell/action-cell";
import { DatePreview } from "./date-cell/date-preview";
import type { GridRenderCellParams } from "@mui/x-data-grid";
import { DayCell } from "./date-cell/day-cell";
import { ActivityTypeCell } from "./activity-type-cell";
import { PercentageCell } from "./percentage-cell";
import { EditableToDate } from "./date-cell/editable-todate";
import { EditableFromDate } from "./date-cell/editable-fromdate";

export const columns = () => {
    return [
        {
            field: "day",
            headerName: "Day",
            renderCell: DayCell,
        },
        {
            field: "activityType",
            headerName: "Activity Type",
            editable: true,
            width: 200,
            renderCell: ({ row }: GridRenderCellParams) =>
                row.activityType ? row.activityType : "Unknown",
            renderEditCell: ActivityTypeCell,
        },
        {
            field: "fromDate",
            headerName: "From Date & Time",
            editable: true,
            width: 250,
            renderEditCell: EditableFromDate,

            renderCell: DatePreview,
        },

        {
            field: "duration",
            headerName: "Duration",
            renderCell: ({ row }: GridRenderCellParams) =>
                formatDiff(row.toDate, row.toDate),
        },
        {
            field: "percentage",
            headerName: "%",
            editable: true,
            renderEditCell: PercentageCell,
        },
        {
            field: "toDate",
            headerName: "To Date & Time",
            editable: true,
            width: 250,
            renderEditCell: EditableToDate,

            renderCell: DatePreview,
        },
        {
            field: "remarks",
            headerName: "Remarks",
            editable: true,
            width: 250,
        },

        {
            field: "deductions",
            headerName: "Deductions",
            renderCell: ({ row }: GridRenderCellParams) => {
                return Deductions(row.fromDate, row.toDate, row.percentage);
            },
        },

        {
            field: "action",
            width: 200,
            headerName: " ",
            renderCell: (params: GridRenderCellParams) => {
                return ActionCell(params);
            },
        },
    ];
};
