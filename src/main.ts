import { Guid } from "guid-typescript"

type TObjectProperties<T> = {
    [P in keyof T]: T[P]
}


type Usr = {
    name: string
   ,age: number
   ,gender: string
}

type GWorker = {
     wid: any
    ,profession_description: string
    ,salary: number
}

const usr:Usr = {
     name: 'Daniel'
    ,age: 37
    ,gender: 'Male'
}

const printUser = (usr: TObjectProperties<Usr>):void => {

    console.log(`${usr.name} ${usr.age} ${usr.gender}`)
}

const printWorker = (args: TObjectProperties<GWorker>):void => {
    console.log(`${args.wid} ${args.profession_description} $${args.salary}`)
}

const printWorkerAprim = (value: GWorker[keyof GWorker]):void => {

    for (const k of value)
       console.log(`${k}`)
}




printUser(usr)
printUser({name: 'Fela2', age: 38, gender: 'Male'})
//printGeneric(usr)
printWorker({
     wid: Guid.create()
    ,profession_description: 'Engineer'
    ,salary: 60000
})
//clearaprintWorkerAprim(Guid.create());
//printWorkerAprim("profession_description");
