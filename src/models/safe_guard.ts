import { Guid } from "guid-typescript"

const KeyExists =
                <T extends Record<any, any>, K extends keyof T>
                (obj: T, key: K): obj is T & Required<Pick<T, K>> => 
{

    return key in obj
}


//type IFunc = <T extends Record<any, any>, K extends keyof T > (param: T) => param is T & T[K]
type IFunc = <T extends Record<any, any>, K extends keyof T > (param: T): param is T => K in T


type User = {
    name: string
    email: string
}


const isObj = <T extends Record<any, any>, K extends keyof T >(obj: T, key: K): obj is T & Required<Pick<T, K>> => {

    return key in obj
}


const usr:User = {
    name: 'Dan Stone',
    email: 'daanselmo@mail.com'
}


const myFun: IFunc = (usr) => {


    
    
  
    if ( isObj(usr, 'last') )
      console.log(usr.)

    return usr

}




