import type { PortDataType } from "features/port-list/types";
import { create } from "zustand";

interface AppStoreState {
    selectedPort: PortDataType | { id: string };
    ActivityList: any;
    modalState: { open: boolean, type: string, rowId: string }
    setActivityList: (list: any) => void
    setSelectedPort: (value: PortDataType) => void;
    setModalState: (value: any) => void;

}

export const useAppStore = create<AppStoreState>()((set) => ({
    selectedPort: { id: '' },
    ActivityList: [],
    modalState: { open: false, type: '', rowId: '' },
    setActivityList: (list) => set((state) => ({
        ...state, ActivityList: list
    })),
    setSelectedPort: (selectedPort) => set((state) => ({
        ...state, selectedPort
    })),
    setModalState: (modalState) => set((state) => ({
        ...state, modalState
    }))
}));