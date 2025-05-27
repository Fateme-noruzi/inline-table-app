import type { GridRenderCellParams } from "@mui/x-data-grid";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const EditableToDate = (params: GridRenderCellParams) => {
    const { row, field, api } = params
    return < LocalizationProvider dateAdapter={AdapterDateFns} >

        <DateTimePicker
            value={row.toDate}
            minDateTime={row.fromDate}
            onChange={(newValue) => {
                api.setEditCellValue({
                    id: row.id,
                    field: field,
                    value: newValue,
                });
            }}
        />
    </LocalizationProvider >
}