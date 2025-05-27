import { MenuItem, Select } from "@mui/material"
import type { GridRenderCellParams } from "@mui/x-data-grid"
import { PercentageOptions } from "features/port-activity/select-option";

export const PercentageCell = (params: GridRenderCellParams) => {
    const { row, api, field } = params
    return (
        <Select
            value={row.percentage}
            onChange={(e) => {
                api.setEditCellValue({
                    id: row.id,
                    field: field,
                    value: e.target.value,
                });
            }}
            autoFocus
            fullWidth
        >
            {PercentageOptions.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    );

}