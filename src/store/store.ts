import type { PortDataType } from "features/port-list/types";
import { create } from "zustand";

interface AppStoreState {
    selectedPort: PortDataType | { id: string };
    ActivityList: any;
    confirmState: { open: boolean, type: string, rowId: string, anchorEl: any }
    setActivityList: (list: any) => void
    setSelectedPort: (value: PortDataType) => void;
    setConfirmState: (value: any) => void;

}

export const useAppStore = create<AppStoreState>()((set) => ({
    selectedPort: { id: '' },
    ActivityList: [],
    confirmState: { open: false, type: '', rowId: '', anchorEl: null },
    setActivityList: (list) => set((state) => ({
        ...state, ActivityList: list
    })),
    setSelectedPort: (selectedPort) => set((state) => ({
        ...state, selectedPort
    })),
    setConfirmState: (confirmState) => set((state) => ({
        ...state, confirmState
    }))
}));