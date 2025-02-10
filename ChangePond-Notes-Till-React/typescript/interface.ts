

interface Safe_models{
    totalmark();
    percentage();
}


class Result implements Safe_models{
    python:number;
    java:number;
    typescript:number;
    total:number
    percentageee:number

    constructor(a:number,b:number,c:number){
        this.python = a
        this.java = b
        this.typescript = c
    }


    totalmark() {
        return this.total = this.python+this.java+this.typescript
    }

    percentage() {
        return (this.total/600)*100
    }

    studentresulr(){
        console.log(`python: ${this.python}`)
        console.log(`python: ${this.java}`)
        console.log(`python: ${this.typescript}`)
        console.log(`python: ${this.totalmark()}`)
        console.log(`python: ${this.percentage()}`)
    }
}


let studentOBJ = new Result(170,123,200)

studentOBJ.studentresulr()
