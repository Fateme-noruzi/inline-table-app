import React from "react";
import {
    Table, TableHead, TableBody, TableCell, TableContainer,
    TableRow, Paper
} from "@mui/material";

export type Column<T> = {
    key: keyof T;
    label: string;
    render?: (value: any, row: T) => React.ReactNode;
};

type Props<T> = {
    columns: Column<T>[];
    data: T[];
    onRowClick?: (row: T) => void;
    selectedRow?: T | {};
};

export function TableComponent<T extends { id: string | number }>({
    columns,
    data,
    onRowClick,
    selectedRow
}: Props<T>) {
    return (
        <TableContainer component={Paper} >
            <Table size="small" >
                <TableHead>
                    <TableRow>
                        {
                            columns.map((col) => (
                                <TableCell key={col.key.toString()} > {col.label} </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row) => (
                            <TableRow
                                key={row.id}
                                hover
                                selected={selectedRow?.id === row.id}
                                onClick={() => onRowClick?.(row)
                                }
                                sx={{ cursor: onRowClick ? "pointer" : "default" }}
                            >
                                {
                                    columns.map((col) => (
                                        <TableCell key={col.key.toString()} >
                                            {
                                                col.render
                                                    ? col.render(row[col.key], row)
                                                    : (row[col.key] as any)
                                            }
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
