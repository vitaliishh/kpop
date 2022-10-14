////1_1
console.log("1_1");
function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: "Business analyst" },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: "QA" },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: "QA" },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: "Designer" },
    ];
    return workers;
}
function logFirstAvailable(a) {
    if (a === void 0) { a = getAllworkers(); }
    console.log('Count of workers:');
    console.log(a.length);
    console.log();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var value = a_1[_i];
        console.log(value['Name'] + ' ' + value['surname']);
    }
}
logFirstAvailable(getAllworkers());
////1_2
console.log();
console.log("1_2");
var Category;
(function (Category) {
    Category[Category["Business analyst"] = 0] = "Business analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum master"] = 4] = "Scrum master";
})(Category || (Category = {}));
console.log();
function getWorkersNamesByCategory(ct) {
    if (ct === void 0) { ct = Category[2]; }
    var arr = getAllworkers();
    var sur = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (ct == value["category"]) {
            sur.push(value["surname"]);
        }
    }
    return sur;
}
function logWorkersNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
console.log("Workers by category:");
logWorkersNames(getWorkersNamesByCategory(Category[3]));
////1_3
console.log();
console.log("1_3");
var f1 = function (ct) {
    var arr = getAllworkers();
    arr.forEach(function (value) {
        if (ct == value["category"]) {
            console.log(value["Name"] + " " + value["surname"]);
        }
    });
};
console.log("Find by cat:");
f1(Category[3]);
console.log();
var getWorkerByID = function (id) {
    var arr = getAllworkers();
    arr.forEach(function (value) {
        if (id == value["id"]) {
            console.log(value["Name"] + " " + value["surname"]);
        }
    });
};
console.log();
console.log("Find by id:");
getWorkerByID(3);
////1_4
console.log();
console.log("1_4");
function createCustomerID(name, id) {
    return id + " " + name;
}
console.log("Concat str:");
var myID = createCustomerID("Ann", 10);
console.log(myID);
var IdGenerator = function (name, id) {
    return id + " " + name;
};
console.log();
console.log("task3,4:");
console.log(IdGenerator("vova", 20));
////1_5
console.log();
console.log("1_5");
console.log("task1:");
function createCustomer(name, age, city) {
    var template = name;
    if (age != null) {
        template = template + " " + age;
    }
    if (city != null) {
        template = template + " " + city;
    }
    console.log(template);
}
createCustomer("Vika");
console.log();
createCustomer("Vika", 4);
console.log();
createCustomer("Vika", 4, "kyiv");
console.log();
console.log("task2:");
logWorkersNames(getWorkersNamesByCategory());
console.log();
console.log("task3:");
logFirstAvailable();
console.log();
console.log("task4,5:");
function сheckoutWorkers(customer, workerIDs) {
    var arr = getAllworkers();
    var res = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var value = arr_2[_i];
        var tempRes = "";
        for (var k = 0; k < workerIDs.length; k++) {
            if (value["id"] == workerIDs[k]) {
                if (value["Name"] == customer) {
                    if (value["available"] == true) {
                        tempRes = tempRes + value["Name"] + " " + value["surname"];
                        res.push(tempRes);
                    }
                }
            }
        }
    }
    return res;
}
var myWorkers = сheckoutWorkers("Evgen", [4]);
myWorkers.forEach(function (value) {
    console.log(value);
});
