import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useAppStore } from "store/store";
import { useActionCell } from "./use-action-cell";

export const ConfirmDialog = () => {
    const { modalState, setModalState } = useAppStore();
    const { adjustRowPosition, deleteRow } = useActionCell();
    return <Dialog
        open={modalState.open}
        onClose={() => setModalState({ open: false, type: '', rowId: null })}
    >
        <DialogTitle>
            {modalState.type === 'adjust' ? 'Adjust Row Position' : 'Delete Row Confirmation'}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {modalState.type === 'adjust'
                    ? 'Do you want to automatically adjust the row position based on fromDate?'
                    : 'Are you sure you want to delete this row?'}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setModalState({ open: false, type: '', rowId: null })}>
                Cancel
            </Button>
            <Button
                onClick={() => {
                    if (modalState.type === 'adjust') {
                        adjustRowPosition(modalState.rowId);
                    } else if (modalState.type === 'delete') {
                        deleteRow(modalState.rowId);
                    }
                }}
                color="primary"
            >
                OK
            </Button>
        </DialogActions>
    </Dialog>
}