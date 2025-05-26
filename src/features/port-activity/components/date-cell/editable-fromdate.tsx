import type { GridRenderCellParams } from "@mui/x-data-grid";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const EditableFromDate = (params: GridRenderCellParams) => {
    const { row, field, api } = params
    return < LocalizationProvider dateAdapter={AdapterDateFns} >

        <DateTimePicker
            value={row.fromDate}
            onChange={(newValue) => {
                api.setEditCellValue({
                    id: row.id,
                    field: field,
                    value: newValue,
                });
                api.setEditCellValue({
                    id: row.id,
                    field: 'toDate',
                    value: newValue,
                });
            }}

        />
    </LocalizationProvider >
}