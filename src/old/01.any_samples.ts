import { Product } from "../models/Product";
import { User } from "../models/user";




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




type Worker = {
    name: string,
    ocupation: string,
    location: string,
    age: number
}

//Type string like name of Worker type
type WorkerName = Worker['name']

const printName = (name: WorkerName) => {
    console.log(name)
}

const w: Partial<Worker> = {
    name: ''
}

w.name = 'Daniel Stonebuilt'

printName('Stone')
printName(w['name'])


 