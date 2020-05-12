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
         code: 'M-01'
       },
       {
        name: 'ড্যাশবোর্ড ',
        id: 2,
        colorCode: 'darkorchid',
        icon: 'dashboard',
        code: 'M-02'
      },
      {
        name: 'প্রজ্ঞাপন',
        id: 3,
        colorCode: 'darkslategray',
        icon: 'notification_important',
        code: 'M-03'
      },
      {
        name: 'প্রিয়',
        id: 4,
        colorCode: 'red',
        icon: 'favorite',
        code: 'M-04'
      },
      {
        name: 'ভাষা',
        id: 5,
        colorCode: 'thistle',
        icon: 'language',
        code: 'M-05'
      },
      {
        name: 'শেয়ার',
        id: 6,
        colorCode: 'indigo',
        icon: 'share',
        code: 'M-06'
      },
      {
        name: 'রেটেড',
        id: 7,
        colorCode: 'darkgreen',
        icon: 'star',
        code: 'M-07'
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
          code: 'M-01'
        },
        {
         name: 'Dashboard',
         id: 2,
         colorCode: 'darkorchid',
         icon: 'dashboard',
         code: 'M-02'
       },
       {
         name: 'Notification',
         id: 3,
         colorCode: 'darkslategray',
         icon: 'notification_important',
         code: 'M-03'
       },
       {
         name: 'Favorite',
         id: 4,
         colorCode: 'red',
         icon: 'favorite',
         code: 'M-04'
       },
       {
         name: 'Language',
         id: 5,
         colorCode: 'thistle',
         icon: 'language',
         code: 'M-05'
       },
       {
         name: 'Share',
         id: 6,
         colorCode: 'indigo',
         icon: 'share',
         code: 'M-06'
       },
       {
         name: 'Rated Us',
         id: 7,
         colorCode: 'darkgreen',
         icon: 'star',
         code: 'M-07'
       },
     ];
     }
     public getBeforeEnglistMenuList() {
      return [
       {
        name: 'Home',
        id: 1,
        colorCode: 'darkgreen',
        icon: 'home',
        code: 'M-01'
      },
      {
       name: 'Sign In',
       id: 2,
       colorCode: 'violet',
       icon: 'account_circle',
       code: 'M-08'
     },
     {
       name: 'Favorite',
       id: 4,
       colorCode: 'red',
       icon: 'favorite',
       code: 'M-04'
     },
     {
       name: 'Language',
       id: 5,
       colorCode: 'thistle',
       icon: 'language',
       code: 'M-05'
     },
     {
       name: 'Share',
       id: 6,
       colorCode: 'indigo',
       icon: 'share',
       code: 'M-06'
     },
     {
       name: 'Rated Us',
       id: 7,
       colorCode: 'darkgreen',
       icon: 'star',
       code: 'M-07'
     },
   ];
   }
   public getBeforeBanglaMenuList() {
    return [
     {
      name: 'হোম ',
      id: 1,
      colorCode: 'darkgreen',
      icon: 'home',
      code: 'M-01'
    },
    {
     name: 'প্রবেশ করুন ',
     id: 2,
     colorCode: 'violet',
     icon: 'account_circle',
     code: 'M-08'
   },
   {
     name: 'প্রিয়',
     id: 4,
     colorCode: 'red',
     icon: 'favorite',
     code: 'M-03'
   },
   {
     name: 'ভাষা',
     id: 5,
     colorCode: 'thistle',
     icon: 'language',
     code: 'M-05'
   },
   {
     name: 'শেয়ার',
     id: 6,
     colorCode: 'indigo',
     icon: 'share',
     code: 'M-06'
   },
   {
     name: 'রেটেড',
     id: 7,
     colorCode: 'darkgreen',
     icon: 'star',
     code: 'M-07'
   },
 ];
 }
}
