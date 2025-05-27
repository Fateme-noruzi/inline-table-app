import type { ActivityPortStore } from "features/port-activity/types";
import { useAppStore } from "store/store";

export const useActionCell = () => {
    const { ActivityList, selectedPort, setActivityList, setConfirmState } =
        useAppStore();
    const adjustRowPosition = (rowId: string) => {
        const newItems = () => {
            const items = ActivityList.find(
                (item: ActivityPortStore) => item.parentId == selectedPort?.id
            )?.items;
            const newRows = [...items];
            const index = newRows.findIndex((r) => r.id === rowId);
            if (index === -1) return items;

            const row = newRows[index];
            newRows.splice(index, 1);

            let insertIndex = newRows.findIndex(
                (r) => new Date(r.fromDate) > new Date(row.fromDate)
            );
            if (insertIndex === -1) insertIndex = newRows.length;

            newRows.splice(insertIndex, 0, row);

            return newRows;
        };
        setActivityList(
            ActivityList.map((item: ActivityPortStore) =>
                item.parentId == selectedPort?.id
                    ? { ...item, items: newItems() }
                    : item
            )
        );
        setConfirmState({ open: false, type: "", rowId: null, anchorEl: null });
    };

    const copyRow = (rowId: number) => {
        const newItems = () => {
            const items = ActivityList.find(
                (item: ActivityPortStore) => item.parentId == selectedPort?.id
            )?.items;
            const newRows = [...items];
            const index = newRows.findIndex((r) => r.id === rowId);
            if (index === -1) return items;

            const row = newRows[index];
            const newRow = { ...row, id: Math.random().toString(36).substr(2, 9) };

            newRows.splice(index + 1, 0, newRow);

            return newRows;
        };
        setActivityList(
            ActivityList.map((item: ActivityPortStore) =>
                item.parentId == selectedPort?.id
                    ? { ...item, items: newItems() }
                    : item
            )
        );
    };

    const deleteRow = (rowId: string) => {
        setActivityList(
            ActivityList.map((item: ActivityPortStore) =>
                item.parentId == selectedPort?.id
                    ? { ...item, items: item.items.filter((r) => r.id !== rowId) }
                    : item
            )
        );

        setConfirmState({ open: false, type: "", rowId: null, anchorEl: null });
    };

    return {
        deleteRow,
        copyRow,
        adjustRowPosition,
    };
};
