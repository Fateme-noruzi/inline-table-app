import { columns } from "./components/columns";

import { DataGrid } from "@mui/x-data-grid";
import { useAppStore } from "store/store";
import type { ActivityPortDataType, ActivityPortStore } from "./types";
export function ActivityPortList() {

    const { selectedPort, ActivityList, setActivityList } = useAppStore();

    const activityData = ActivityList.find((item: ActivityPortStore) => item.parentId == selectedPort?.id)?.items || []


    const processRowUpdate = (newRow: ActivityPortDataType, oldRow: ActivityPortDataType) => {
        const updatedRow = {
            ...newRow,
            toDate: newRow.fromDate,
        };

        const newList = ActivityList.map((item: ActivityPortStore) =>
            item.parentId == selectedPort?.id
                ? {
                    ...item,
                    items: item.items.map((it) => (it.id == newRow.id ? newRow.fromDate !== oldRow.fromDate ? updatedRow : newRow : it)),
                }
                : item
        )
        setActivityList(newList);

        return newRow.fromDate !== oldRow.fromDate ? updatedRow : newRow
    };


    return (
        <DataGrid
            rows={activityData}
            hideFooter={true}
            columns={columns()}
            editMode="cell"
            processRowUpdate={processRowUpdate}
        />
    );
}
