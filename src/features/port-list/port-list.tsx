import { TableComponent } from "@base-component/table-component/table-component";
import { columns } from "./components/columns";
import { portData } from "../../mock-data";
import { useAppStore } from "store/store";
import { ToolBar } from "@base-component/toolbar";

export const PortTable = () => {
    const { setSelectedPort, selectedPort } = useAppStore();
    return (
        <>
            <ToolBar title=" Lay Times" />
            <TableComponent
                columns={columns}
                data={portData}
                onRowClick={(row) => setSelectedPort(row)}
                selectedRow={selectedPort}
            />
        </>
    );
};
