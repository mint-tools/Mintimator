import type {Activity} from "$lib/requirementThree/activity";

export class ActivityManager {
    public activities: Activity[] = $state([]);
    public totalPoints: number = $state(0);
    public addActivity(activity: Activity) {
        this.activities.push(activity);
        this.totalPoints += activity.points;
    }
    public removeActivity(index: number) {
        this.totalPoints -= this.activities[index].points;
        this.activities = this.activities.slice(0, index).concat(this.activities.slice(index + 1));
    }
    public getActivities(): Activity[] {
        return this.activities;
    }
}