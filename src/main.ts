
import { Guid } from "guid-typescript";
import { User } from "./models/user";
import { isValidDescription } from "./models/validation"

//#region Functions

//#endregion


const name = 'Daniel'

const info = (...args: string[]): void => {

    console.log(args)
}


info('Daniel', 'Anselmo' )





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









 