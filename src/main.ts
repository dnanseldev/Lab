
import { Guid } from "guid-typescript";
import { User } from "./models/user";

//#region Functions
const isValidName = (p_name: string ): boolean | null => {
    const re = /\w{3,}/g
    
    if ( !re.exec( p_name ) )
      return null
    
    return true
}
//#endregion


const name = 'Da'

try
{

    if ( isValidName(name) )
    {
        const usr = new User(
            Guid.create()
            ,name
            ,'dnansel@hotmail.com'
        )

        console.log(usr.Info)
    } else
    throw  Error('Erros while try build the object')
    
} catch (error) {
    console.log(error)
}





 