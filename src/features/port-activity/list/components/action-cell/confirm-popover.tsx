import {
    Button,
    ClickAwayListener,
    Paper,
    Popper,
    Stack,
    Typography,
} from "@mui/material";
import { useAppStore } from "store/store";
import { useActionCell } from "./use-action-cell";

export const ConfirmPopover = () => {
    const { confirmState, setConfirmState } = useAppStore();
    const { adjustRowPosition, deleteRow } = useActionCell();
    return (
        <Popper
            open={confirmState.open}
            anchorEl={confirmState.anchorEl}
            placement="top"
            modifiers={[
                {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: '[data-popper-arrow]',
                    },
                },
            ]}
        >
            <ClickAwayListener
                onClickAway={() =>
                    setConfirmState({
                        open: false,
                        type: "",
                        rowId: null,
                        anchorEl: null,
                    })
                }
            >
                <Paper sx={{ p: 2, mt: 1, position: "relative" }}>
                    <span
                        data-popper-arrow
                        style={{
                            position: 'absolute',
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '8px solid white',
                            bottom: '-8px',
                            left: 'calc(50% - 8px)',
                            boxShadow: '0px 1px 1px rgba(0,0,0,0.1)',
                            zIndex: 1,
                        }}
                    />
                    <Stack spacing={1}>
                        <Typography variant="body2">
                            {confirmState.type === "adjust"
                                ? "Do you want to automatically adjust the row position based on fromDate?"
                                : "sure to delete?"}
                        </Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <Button
                                size="small"
                                onClick={() =>
                                    setConfirmState({
                                        open: false,
                                        type: "",
                                        rowId: null,
                                        anchorEl: null,
                                    })
                                }
                            >
                                Cancel
                            </Button>
                            <Button
                                size="small"
                                color="error"
                                onClick={() => {
                                    if (confirmState.type === "adjust") {
                                        adjustRowPosition(confirmState.rowId);
                                    } else if (confirmState.type === "delete") {
                                        deleteRow(confirmState.rowId);
                                    }
                                }}
                            >
                                Ok
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </ClickAwayListener>
        </Popper>
    );
};
