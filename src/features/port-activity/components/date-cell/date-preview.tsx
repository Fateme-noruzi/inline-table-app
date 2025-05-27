import type { GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const DatePreview = ({ row, field }: GridRenderCellParams) => {
    const date = dayjs(row[field]);
    const topLine = date.format('YYYY-MM-DD');
    const bottomLine = date.format('HH:mm • ddd');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            lineHeight: 1.2,
            justifyContent: 'center',
            height: '100%',
        }}>
            <span>{topLine}</span>
            <span style={{ fontSize: '0.75rem', color: '#666' }}>{bottomLine}</span>
        </div>
    );
}