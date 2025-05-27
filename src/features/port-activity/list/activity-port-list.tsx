
import { DataGrid, } from "@mui/x-data-grid";
import { useActivityPortList } from "./use-activity-port-list";
import { columns } from "./components/columns";

export function ActivityPortList() {
    const {
        getRowClassName,
        processRowUpdate,
        activityData
    } = useActivityPortList()

    return (
        <DataGrid
            rows={activityData}
            hideFooter={true}
            columns={columns}
            editMode="cell"
            processRowUpdate={processRowUpdate}
            disableColumnMenu
            //@ts-ignore
            getRowClassName={getRowClassName}
        />
    );
}
