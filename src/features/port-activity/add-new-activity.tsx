import { Button } from "@mui/material";
import { useAppStore } from "store/store";
import { GridAddIcon } from "@mui/x-data-grid";
import type { ActivityPortStore } from "./types";
import { ToolBar } from "@base-component/toolbar";

export const AddNewActivity = () => {
    const { selectedPort, ActivityList, setActivityList } = useAppStore();
    const handleAddRow = () => {
        const selectedActivity = ActivityList.find(
            (item: ActivityPortStore) => item.parentId == selectedPort?.id
        );
        if (selectedActivity) {
            const itemLength = selectedActivity.items.length;
            const lastToDate = selectedActivity.items[itemLength - 1].toDate;
            const newRow = {
                id: crypto.randomUUID(),
                fromDate: lastToDate,
                toDate: lastToDate,
                percentage: "0%",
                activityType: "",
            };
            setActivityList(
                ActivityList.map((item: ActivityPortStore) =>
                    item.parentId == selectedPort?.id
                        ? { ...item, items: [...item.items, newRow] }
                        : item
                )
            );
        } else {
            const firsRow = {
                id: crypto.randomUUID(),
                fromDate: (new Date()),
                toDate: (new Date()),
                percentage: "0%",
                activityType: "",
            };
            ActivityList.push({ parentId: selectedPort?.id, items: [firsRow] });
            setActivityList(ActivityList);
        }
    };
    return (
        <ToolBar title="Port Activity"
            ComponentAction={<Button
                onClick={handleAddRow}
                variant="contained"
                color="inherit"
                size="small"
                sx={{ my: 2 }}
                disabled={!selectedPort?.id}
                startIcon={<GridAddIcon />}
            >
                Add New
            </Button>} />

    );
};
