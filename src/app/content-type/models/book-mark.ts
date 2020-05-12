export interface BookMarkStatus {
    id: number;
    favoritedBy?: number;
    catagoryId?: number;
    contentTypeId?: number;
    contentId?: number;
    status: number;
    createDate?: Date;
}