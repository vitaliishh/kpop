////1_1
console.log("1_1")

function getAllworkers() {
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: "Business analyst"},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: "QA"},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: "QA"},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: "Designer"},
    ]

    return workers
}


function logFirstAvailable(a = getAllworkers()) {

    console.log('Count of workers:')
    console.log(a.length)
    console.log()

    for (let value of a) {
        console.log(value['Name'] + ' ' + value['surname'])
    }
}

logFirstAvailable(getAllworkers())


////1_2
console.log()
console.log("1_2")

enum Category {
    "Business analyst",
    "Developer",
    "Designer",
    "QA",
    "Scrum master"
}

console.log()

function getWorkersNamesByCategory(ct: string = Category[2]): string[] {
    let arr = getAllworkers()
    let sur: string[] = []
    for (let value of arr){
        if (ct == value["category"]) {
            sur.push(value["surname"])
        }
    }

    return sur
}


function logWorkersNames (arr: string[]){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

console.log("Workers by category:")
logWorkersNames(getWorkersNamesByCategory(Category[3]))


////1_3
console.log()
console.log("1_3")

let f1 = (ct: string) => {
    let arr = getAllworkers()

    arr.forEach((value) => {
        if (ct == value["category"]) {
            console.log(value["Name"] + " " + value["surname"])
        }
    })
}

console.log("Find by cat:")
f1(Category[3])

console.log()


let getWorkerByID = (id: number) => {
    let arr = getAllworkers()

    arr.forEach((value) => {
        if (id == value["id"]) {
            console.log(value["Name"] + " " + value["surname"])
        }
    })
}

console.log()
console.log("Find by id:")
getWorkerByID(3)



////1_4
console.log()
console.log("1_4")


function createCustomerID (name: string, id: number): string{
    return id + " " + name
}

console.log("Concat str:")
let myID: string = createCustomerID("Ann", 10)
console.log(myID)




let IdGenerator = (name: string, id: number) =>{
    return id + " " + name
};

console.log()
console.log("task3,4:")
console.log(IdGenerator("vova", 20))


////1_5
console.log()
console.log("1_5")
console.log("task1:")

function createCustomer (name: string, age?: number, city?: string){
    let template: string = name;

    if (age != null){
        template = template + " " + age
    }

    if (city != null){
        template = template + " " + city
    }

    console.log(template)
}

createCustomer("Vika")
console.log()
createCustomer("Vika", 4)
console.log()
createCustomer("Vika", 4, "kyiv")
console.log()


console.log("task2:")
logWorkersNames(getWorkersNamesByCategory())

console.log()
console.log("task3:")
logFirstAvailable()

console.log()
console.log("task4,5:")
function сheckoutWorkers (customer: string, workerIDs: number []): string[]{

    let arr = getAllworkers()
    let res: string[] = []



    for (let value of arr) {
        let tempRes: string = ""

        for (let k = 0; k < workerIDs.length; k++){
            if (value["id"] == workerIDs[k]){
                if (value["Name"] == customer){
                    if (value["available"] == true){
                        tempRes = tempRes + value["Name"] + " " + value["surname"]

                        res.push(tempRes)
                    }

                }
            }

        }
    }

    return res
}




let myWorkers: string[] = сheckoutWorkers("Evgen", [4])

myWorkers.forEach((value) => {
    console.log(value)
})