import { Box, Stack, Typography } from "@mui/material";
import { type ReactNode } from "react";

type ToolBarProps = {
    title: string;
    ComponentAction?: ReactNode
};
export const ToolBar = ({ title, ComponentAction }: ToolBarProps) => {
    return (
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
                    {title}
                </Typography>
            </Box>
            {ComponentAction && ComponentAction}
        </Stack>
    );
};
