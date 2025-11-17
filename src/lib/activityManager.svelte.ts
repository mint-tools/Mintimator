import type {Activity} from "$lib/activity";

export class ActivityManager {
    public activities: Activity[] = $state([]);
    public addActivity(activity: Activity) {
        this.activities.push(activity);
    }
    public removeActivity(index: number) {
        this.activities = this.activities.slice(0, index).concat(this.activities.slice(index + 1));
    }
    public getActivities(): Activity[] {
        return this.activities;
    }
}