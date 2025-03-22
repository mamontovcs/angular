import { ITask } from "./task";

export class Task implements ITask {

    constructor(id: string, userId: string, title: string, summary: string, dueDate: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
    }

    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}