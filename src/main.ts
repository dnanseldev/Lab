type TObjectProperties<T> = {
    [P in keyof T]: T[P]
}


type Usr = {
    name: string
   ,age: number
   ,gender: string
}

const usr:Usr = {
     name: 'Daniel'
    ,age: 37
    ,gender: 'Male'
}

const printUser = (usr: TObjectProperties<Usr>):void => {

    console.log(`${usr.name} ${usr.age} ${usr.gender}`)
}

const printGeneric = <T>(obj: TObjectProperties<T>):void => {

    //console.log(`${usr.name} ${usr.age} ${usr.gender}`)
    for (const value in obj)
       console.log(typeof value)
}


printUser(usr)
printUser({name: 'Fela', age: 38, gender: 'Male'})
//printGeneric(usr)