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


export class Product
{
    readonly ID: any 
    readonly description: string
    readonly category: string

    constructor( ID: any 
                ,description: string
                ,category: string )
    {
       this.ID = ID
       this.description = description
       this.category = category
    }
}