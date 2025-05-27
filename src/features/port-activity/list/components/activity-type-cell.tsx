import { MenuItem, Select } from "@mui/material"
import type { GridRenderCellParams } from "@mui/x-data-grid"
import { ActivityTypeOptions } from "features/port-activity/select-option"

export const ActivityTypeCell = (params: GridRenderCellParams) => {
    const { row, api, field } = params
    return <Select
        value={row.activityType}
        onChange={(e) => {
            api.setEditCellValue({
                id: row.id,
                field: field,
                value: e.target.value,
            })
        }

        }
        fullWidth
    >
        {
            ActivityTypeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))
        }
    </Select >
}