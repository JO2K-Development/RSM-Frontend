import Client from "./Client"

export interface Request{
    id:string
    creator:Client
    message:string
    date:string

}
export default Request;