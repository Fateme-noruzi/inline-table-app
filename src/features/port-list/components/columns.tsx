import type { Column } from '@base-component/table-component/table-component';
import type { PortDataType } from '../types';

export const columns: Column<PortDataType>[] = [
    { key: "portName", label: "Port Name" },
    { key: "cargo", label: "Cargo" },
    { key: "blCode", label: "BL Code" },
    { key: "quantity", label: "Quantity" },
    { key: "ldRate", label: "L/D Rate" },
    { key: "term", label: "Term" },
    { key: "demRate", label: "Dem Rate" },
    { key: "desRate", label: "Des Rate" },
    { key: "allowed", label: "Allowed" },
    { key: "used", label: "Used" },
    { key: "balance", label: "Balance" },
    { key: "laycanFrom", label: "Laycan From" },
    { key: "laycanTo", label: "Laycan To" },
];
