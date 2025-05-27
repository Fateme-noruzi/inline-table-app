import { ActivityPortList } from "./list/activity-port-list";

import { AddNewActivity } from "./add-new-activity";

export const ActivityPort = () => {

    return (
        <div>
            <AddNewActivity />
            <ActivityPortList />
        </div>
    );
};
