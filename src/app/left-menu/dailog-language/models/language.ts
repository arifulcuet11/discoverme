export enum Language {
   Bangla = 1,
   English = 2
}

export class MenuList {
    public Name: string;
    public Id: number;
    public colorCode: string;

    public getBanglaMenuList() {
       return [
        {
         name: 'হোম ',
         id: 1,
         colorCode: 'darkgreen',
         icon: 'home',
       },
       {
        name: 'ড্যাশবোর্ড ',
        id: 2,
        colorCode: 'darkorchid',
        icon: 'dashboard',
      },
      {
        name: 'প্রজ্ঞাপন',
        id: 3,
        colorCode: 'darkslategray',
        icon: 'notification_important',
      },
      {
        name: 'প্রিয়',
        id: 4,
        colorCode: 'red',
        icon: 'favorite',
      },
      {
        name: 'ভাষা',
        id: 5,
        colorCode: 'thistle',
        icon: 'language',
      },
      {
        name: 'শেয়ার',
        id: 6,
        colorCode: 'indigo',
        icon: 'share',
      },
      {
        name: 'রেটেড',
        id: 7,
        colorCode: 'darkgreen',
        icon: 'star',
      },
    ];
    }
    public getEnglistMenuList() {
        return [
         {
          name: 'Home',
          id: 1,
          colorCode: 'darkgreen',
          icon: 'home',
        },
        {
         name: 'Dashboard',
         id: 2,
         colorCode: 'darkorchid',
         icon: 'dashboard',
       },
       {
         name: 'Notification',
         id: 3,
         colorCode: 'darkslategray',
         icon: 'notification_important',
       },
       {
         name: 'Favorite',
         id: 4,
         colorCode: 'red',
         icon: 'favorite',
       },
       {
         name: 'Language',
         id: 5,
         colorCode: 'thistle',
         icon: 'language',
       },
       {
         name: 'Share',
         id: 6,
         colorCode: 'indigo',
         icon: 'share',
       },
       {
         name: 'Rated Us',
         id: 7,
         colorCode: 'darkgreen',
         icon: 'star',
       },
     ];
     }
}
