///2_1
console.log("2_1")

interface Workerr{
    id: number,
    name: string
    surname: string
    available: boolean
    salary: number,
    category: string
}

function getAllworkers2(): Workerr[] {
    let workers = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: "Business analyst"},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: "QA"},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: "QA"},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: "Designer"},
    ]

    return workers
}



function getWorkerByID2(id: number): Workerr{
    let arr = getAllworkers2()

    let a1: number
    let a2: string
    let a3: string
    let a4: boolean
    let a5: number
    let a6: string

    arr.forEach((value) => {
        if (id == value["id"]) {

            a1 = value["id"]
            a2 = value["name"]
            a3 = value["surname"]
            a4 = value["available"]
            a5 = value["salary"]
            a6 = value["category"]
        }
    })

    return {id: a1, name: a2, surname: a3, available: a4, salary: a5, category: a6}
}

console.log()

function PrintWorker(person: Workerr){
    console.log(person.name + " " + person.surname + " got salary " + person.salary)
}

PrintWorker(getWorkerByID2(4))


///2_2,
console.log("2_2")

interface PrizeLogger{
    a: string
}

///2_3
console.log("2_3")

interface Person{
    name: string,
    email: string
}

interface Author extends Person{
    numBooksPublished: number
}


interface Librarian extends Person{
    department: string,
    assistCustomer: (custName: string) => void
}

let favoriteAuthor: Author = {numBooksPublished: 5, name: "Ann", email: "efefegg@gmail.com"}
let favoriteLibrarian: Librarian = {
    department: "43a",
    name: "Tom",
    email: "gg@gmail.com",
    assistCustomer: (custName: string) => {
        console.log(custName)
    }
}

///2_4
console.log("2_4")

class UniversityLibrarian implements Librarian{
    public department: "43a"
    public name: "Tom"
    public email: "gg@gmail.com"

    public assistCustomer(custName: string){
        console.log(this.name)
        console.log(custName)
    }
}


///2_5
console.log("2_5")

class ReferenceItem{
    protected title: string
    protected year: number
    private _publisher: string = "vova"
    private department: string = "t2"

    constructor(newTitle: string, newYear:  number) {
        this.title = newTitle
        this.year = newYear
        console.log("Creating a new ReferenceItem")
    }

    public printItem(){
        console.log(`title ${this.year} was published in year ${this.year} ${this.department}`)
    }

    public getPublisher(): string{
        let a: string = this._publisher
        return a.toUpperCase()
    }

    public setPublisher(newPublisher: string){
        this._publisher = newPublisher
    }
}

let ref: ReferenceItem = new ReferenceItem("hello w", 2004)

ref.printItem()

ref.setPublisher("Ann")
console.log(ref.getPublisher())

console.log()


///2_6
console.log("2_6")

class Encyclopedia extends ReferenceItem{
    public edition

    public printItem(){
        console.log(`Edition: edition (${this.year})`)
    }
}

let refBook = new Encyclopedia("hello w", 2004)
refBook.printItem()

///2_7
console.log()
console.log("2_7")

abstract class ReferenceItem2{
    protected title: string
    protected year: number
    private _publisher: string = "vova"
    private department: string = "t2"

    constructor(newTitle: string, newYear:  number) {
        this.title = newTitle
        this.year = newYear
        console.log("Creating a new ReferenceItem")
    }

    public printItem(){
        console.log(`title ${this.year} was published in year ${this.year} ${this.department}`)
    }

    public getPublisher(): string{
        let a: string = this._publisher
        return a.toUpperCase()
    }

    public setPublisher(newPublisher: string){
        this._publisher = newPublisher
    }

    abstract printCitation()
}




class Encyclopedia2 extends ReferenceItem2{
    public edition

    public printItem(){
        console.log(`Edition: edition (${this.year})`)
    }

    public printCitation(){
        console.log(this.title + " - " + this.year)
    }
}

let refBook2 = new Encyclopedia2("hello w", 2004)
refBook2.printCitation()