export type ActivityPortDataType = {
    id: string,
    activityType: string;
    fromDate: Date;
    percentage: string;
    toDate: Date;
};

export type ActivityPortStore = {
    parentId: number,
    items: ActivityPortDataType[]
}