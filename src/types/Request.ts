import Client from "./Client"

export interface Request{
    id?:string
    creator:Client
    message:string
    carMake:string
    carModel:string
}
export default Request;