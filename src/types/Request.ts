import Client from "./Client"

export interface Request{
    creator:Client
    message:string
    carMake:string
    carModel:string
}
export default Request;