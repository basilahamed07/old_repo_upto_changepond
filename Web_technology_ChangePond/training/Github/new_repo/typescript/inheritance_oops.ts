import Person from "./oops";


class Compay extends Person{
    cname:string
    gstno:number
    state:string
    area:string

    constructor(f:string,s:string,p:number,lo:string,sts:boolean,comp:string,gt:number,state:string,areas:string){
        super(f,s,p,lo,sts)
        this.cname = comp
        this.gstno = gt
        this.state = state
        this.area = areas
    }
    persondetails(){
        return (`Company name ==]${this.cname}, gstnumber= ${this.gstno}, state= ${this.state}, area= ${this.area}`)
        
    }
}


let company = new Compay("basil", "ahamed", 7397061751, "swizerland", true, "changepond technology" , 43242344242, "tamil nadu", "chennai")

console.log(company.personaldetails())
console.log(company.gstno)
console.log(company.persondetails())
console.log(company.Firstname)
console.log(company.phonenumber)

