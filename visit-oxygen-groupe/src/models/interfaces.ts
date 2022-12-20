
export interface IError {
   data: {
     message: string;
     stack: string;
   };
   status: number;
 }
export interface IParam {
cd: string;
 }

 export interface IUser {
  username?: string;
  email?: string | number | null;
  phone?: string | number;
  description?: string | string[];
 }



 export type IconTypes =
  | 'share'
  | 'add-cross'
  | 'check-case'
  | 'error'
  | 'success'
  | 'dot-menu'
  | 'password-show'
  | 'password-hide'
  | 'logo'
  | 'github'
  | 'telegram'
  | 'linkedin'
  | 'rss'
  | 'edit'
  | 'confirm'
  | 'cancel'
  | 'delete';