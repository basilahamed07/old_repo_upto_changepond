// creating the oops concpts

class Person{
// creating the data-member is also call as variable

    Firstname:string = "Basil";
    Secondname:string = "Ahamed";
    phonenumber:number = 917397061751;
    address:string = "chennai";
    status:boolean = true;

    //constractor 
    constructor(Firstname:string,Secondname:string,phonenumber:number,address:string,status:boolean){
        this.Firstname = Firstname
        this.Secondname = Secondname
        this.phonenumber = phonenumber
        this.status = status
    }


    //member function here 

    personaldetails(){
        return `firstname=${this.Firstname }, secondname=${this.Secondname}, phonenumber=${this.phonenumber}, address=${this.address}, status=${this.status}`
    }


}

// creating the object for this class

// let detailsObj= new Person("basil","ahamed",7397061751, "Chennai", true);
//     console.log(detailsObj.Firstname)
//     console.log(detailsObj.personaldetails())
// let detailsObj1= new Person("mohamed","fawaz",9494294423, "Chennai", false);
//     console.log(detailsObj1.Firstname)
//     console.log(detailsObj1.personaldetails())
// let detailsObj2= new Person("mohamed","misha;",9494294423, "Chennai", false);
//     console.log(detailsObj2.Firstname)
//     console.log(detailsObj2.personaldetails())
// let detailsObj3= new Person("mohamed","farvez",9494294423, "Chennai", false);
//     console.log(detailsObj3.Firstname)
//     console.log(detailsObj3.personaldetails())
 
export default Person

