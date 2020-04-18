export interface Catagory {
    id: number;
    name: string;
    url: string;
    isActive: boolean;
    createdDateUtc?: Date;
    createdBy?: number;
    updatedBy?: number;
    updatedDateUtc?: Date;
    colorCode: string;
  }
  