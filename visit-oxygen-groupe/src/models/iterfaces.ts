
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
   name?: string;
   login?: string;
   _id?: string;
   password?: string;
 }

 export interface IInitialState {
   name: string;
   login: string;
   token: string;
   id: string;
   password?: string;
   allUsers?: IUser[];
 }