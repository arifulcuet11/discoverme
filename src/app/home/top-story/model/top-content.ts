export interface TopContent {
  id: number;
  title: string;
  description: string;
  providerName: string;
  totalComment: number;
  totalLike: number;
  totalRead: number;
  catagoryId: number;
  catagoryName: string;
  colorCode: string;
  contentLikeStatus?: number;
  markAsReadStatus?: number;
  createdDateUtc: Date;
}
