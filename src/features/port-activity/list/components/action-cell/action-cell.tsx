import { Button } from "@mui/material";
import type { GridRenderCellParams } from "@mui/x-data-grid";
import type { ActivityPortDataType, ActivityPortStore } from "features/port-activity/types";
import { useAppStore } from "store/store";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useActionCell } from "./use-action-cell";
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmPopover } from "./confirm-popover";

export const ActionCell = (params: GridRenderCellParams) => {
    const { ActivityList, selectedPort, setConfirmState } = useAppStore();
    const { copyRow } = useActionCell()
    const { id, row } = params;
    const items = ActivityList.find((item: ActivityPortStore) => item.parentId == selectedPort?.id)?.items;

    const rowIndex = items?.findIndex((r: ActivityPortDataType) => r.id === id);
    const prevRow = rowIndex > 0 ? items[rowIndex - 1] : null;
    const showAdjustButton = prevRow ? new Date(row.fromDate) < new Date(prevRow.fromDate) : false;

    return (
        <>
            {showAdjustButton && (
                <Button
                    variant="text"
                    size="small"
                    startIcon={<InfoOutlineIcon />}
                    onClick={(event) => setConfirmState({ open: true, type: 'adjust', rowId: id, anchorEl: event.currentTarget })}
                />


            )}

            {rowIndex !== 0 && <Button
                variant="text"
                size="small"
                startIcon={<ContentCopyIcon />}
                //@ts-ignore
                onClick={() => copyRow(id)}
            />}


            <Button
                variant="text"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={(event) => setConfirmState({ open: true, type: 'delete', rowId: id, anchorEl: event.currentTarget })}
            />


            <ConfirmPopover />
        </>
    );
};

