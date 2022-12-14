export class User
{
    readonly ID: any
    readonly name: string 
    readonly email: string 

    constructor(  pid: any
                 ,pname?: string
                 ,pemail?: string )
    {
        
        this.ID = pid
        this.name = pname !== undefined ? pname : ''     
        this.email = pemail !== undefined ? pemail : ''
    }
    

    
    get Info() {
        return `${this.ID}|${this.name}|${this.email}`
    }
    
}



