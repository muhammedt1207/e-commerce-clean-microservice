import {ObjectId} from 'mongoose';


enum Role{
    use='user',
    admin='admin'
}

export  interface UserEntity{
    _id?:ObjectId|string;
    usename:string;
    email:string;
    password:string;
    role:Role;
    isAdmin:boolean;
    isBlocked:boolean
}