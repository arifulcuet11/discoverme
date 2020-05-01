export interface MarkAsRead {
    id: number;
    markedby?: number;
    contentId: number;
    status: number;
    markedate?: Date;
}