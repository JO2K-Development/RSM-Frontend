import Client from "./Client"

export interface RequestType{
    id?:string
    creator:Client
    message:string
    carMake:string
    carModel:string
    createdAt?:string
}
export default RequestType;