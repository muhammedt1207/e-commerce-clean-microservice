import { ObjectId, Schema } from "mongoose";

enum Role{
    user="user",
    admin='admin'
}

export interface IUserEntity{
    _id?:Schema.Types.ObjectId,
    username:string,
    email:string,
    password:string,
    isAdmin?:boolean,
    role?:Role,
    isBlock?:boolean
}


export interface IUserRequestEntity{
    _id:Schema.Types.ObjectId,
    username:string,
    email:string,
    password:string
}