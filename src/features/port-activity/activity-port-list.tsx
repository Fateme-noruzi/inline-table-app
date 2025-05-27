import { columns } from "./components/columns";

import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import { useAppStore } from "store/store";
import type { ActivityPortDataType, ActivityPortStore } from "./types";
export function ActivityPortList() {
    const { selectedPort, ActivityList, setActivityList } = useAppStore();

    const activityData =
        ActivityList.find(
            (item: ActivityPortStore) => item.parentId == selectedPort?.id
        )?.items || [];

    const processRowUpdate = (
        newRow: ActivityPortDataType,
        oldRow: ActivityPortDataType
    ) => {
        let updatedRow = newRow;

        if (
            (newRow.fromDate !== oldRow.fromDate && newRow.percentage == "0%") ||
            (newRow.percentage !== oldRow.percentage && newRow.percentage == "0%")
        ) {
            updatedRow = {
                ...newRow,
                toDate: newRow.fromDate,
            };
        }

        const newList = ActivityList.map((item: ActivityPortStore) =>
            item.parentId == selectedPort?.id
                ? {
                    ...item,
                    items: item.items.map((it) =>
                        it.id == newRow.id
                            ? updatedRow

                            : it
                    ),
                }
                : item
        );
        setActivityList(newList);

        return updatedRow;
    };

    const getRowClassName = (params: GridRenderCellParams) => {
        const index = activityData.findIndex((r: ActivityPortDataType) => r.id === params.id);
        if (index > 0) {
            const currentDate = new Date(activityData[index].fromDate);
            const prevDate = new Date(activityData[index - 1].fromDate);
            if (currentDate < prevDate) {
                return 'row-error';
            }
        }
        return '';
    };

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
