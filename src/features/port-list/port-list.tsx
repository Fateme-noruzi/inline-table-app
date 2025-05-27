import { TableComponent } from "@base-component/table-component/table-component";
import { columns } from "./components/columns";
import { portData } from "../../mock-data";
import { useAppStore } from "store/store";
import { Box, Stack, Typography } from "@mui/material";

export const PortTable = () => {
    const { setSelectedPort, selectedPort } = useAppStore();
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
            >
                <Box
                    sx={{
                        borderLeft: "4px solid #1976d2",
                        pl: 2,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        Lay Times
                    </Typography>
                </Box>
            </Stack>

            <TableComponent
                columns={columns}
                data={portData}
                onRowClick={(row) => setSelectedPort(row)}
                selectedRow={selectedPort}
            />
        </>
    );
};
