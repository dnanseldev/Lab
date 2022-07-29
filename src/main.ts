
import { Guid } from "guid-typescript";
import { Product, User } from "./models/user";
import { isValidDescription } from "./models/validation"

//#region Functions

const info = (...args: string[]): void => {

    console.log(args)
}

const IFunc = <T extends User | Product>(value: T): T => value

type GenericFunc = <T>(value: T) => T;

const fn1: GenericFunc = (val) => val;


type TMessageNotification = <T>(msg: string, param?: T) => void

const mn1: TMessageNotification = (msg, obj) => {

    if (obj !== null && obj !== undefined )
      console.log(msg, obj)
    
      console.log(msg)
}












//#endregion
//--------------------------------------------------
//#region test are
//const name = 'Daniel'
//info('Daniel', 'Anselmo' )

const usr = new User(
    Guid.create()
    ,'Daniel Stonebuilt'
    ,'dnansel@hotmail.com'
)


const prdt = new Product(
   Guid.create()
  ,'Rich Father Poor Father'
  ,'Book'
)



//console.log( IFunc(prdt).description )
//console.log( IFunc(usr).name )
//console.log(IFunc<User>(usr))
//console.log(prdt)

//#endregion
//---------------------------------------------------




/*
try
{

    if ( isValidDescription(name) )
    {
        const usr = new User(
            Guid.create()
            ,name
            ,'dnansel@hotmail.com'
        )

        console.log(usr.Info)
    }
    else
      console.log('Erros while try build the object')
      //throw  Error('Erros while try build the object')
    
} catch (error) {
    console.log(error)
}
*/


console.log(fn1<string>('Das ist ein test'))
console.log( fn1<number>(50) )

mn1('Hello')
mn1<User>('Hello', usr)







 