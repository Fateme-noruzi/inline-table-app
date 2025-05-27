import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useAppStore } from "store/store";
import { useActionCell } from "./use-action-cell";

export const ConfirmDialog = () => {
    const { confirmState, setConfirmState } = useAppStore();
    const { adjustRowPosition, deleteRow } = useActionCell();
    return <Dialog
        open={confirmState.open}
        onClose={() => setConfirmState({ open: false, type: '', rowId: null, anchorEl: null })}
    >
        <DialogTitle>
            {confirmState.type === 'adjust' ? 'Adjust Row Position' : 'Delete Row Confirmation'}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {confirmState.type === 'adjust'
                    ? 'Do you want to automatically adjust the row position based on fromDate?'
                    : 'Are you sure you want to delete this row?'}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setConfirmState({ open: false, type: '', rowId: null, anchorEl: null })}>
                Cancel
            </Button>
            <Button
                onClick={() => {
                    if (confirmState.type === 'adjust') {
                        adjustRowPosition(confirmState.rowId);
                    } else if (confirmState.type === 'delete') {
                        deleteRow(confirmState.rowId);
                    }
                }}
                color="primary"
            >
                OK
            </Button>
        </DialogActions>
    </Dialog>
}