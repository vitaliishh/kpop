var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///2_1
console.log("2_1");
function getAllworkers2() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: "Business analyst" },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: "QA" },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: "QA" },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: "Designer" },
    ];
    return workers;
}
function getWorkerByID2(id) {
    var arr = getAllworkers2();
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    arr.forEach(function (value) {
        if (id == value["id"]) {
            a1 = value["id"];
            a2 = value["name"];
            a3 = value["surname"];
            a4 = value["available"];
            a5 = value["salary"];
            a6 = value["category"];
        }
    });
    return { id: a1, name: a2, surname: a3, available: a4, salary: a5, category: a6 };
}
console.log();
function PrintWorker(person) {
    console.log(person.name + " " + person.surname + " got salary " + person.salary);
}
PrintWorker(getWorkerByID2(4));
///2_2,
console.log("2_2");
///2_3
console.log("2_3");
var favoriteAuthor = { numBooksPublished: 5, name: "Ann", email: "efefegg@gmail.com" };
var favoriteLibrarian = {
    department: "43a",
    name: "Tom",
    email: "gg@gmail.com",
    assistCustomer: function (custName) {
        console.log(custName);
    }
};
///2_4
console.log("2_4");
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name);
        console.log(custName);
    };
    return UniversityLibrarian;
}());
///2_5
console.log("2_5");
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        this._publisher = "vova";
        this.department = "t2";
        this.title = newTitle;
        this.year = newYear;
        console.log("Creating a new ReferenceItem");
    }
    ReferenceItem.prototype.printItem = function () {
        console.log("title ".concat(this.year, " was published in year ").concat(this.year, " ").concat(this.department));
    };
    ReferenceItem.prototype.getPublisher = function () {
        var a = this._publisher;
        return a.toUpperCase();
    };
    ReferenceItem.prototype.setPublisher = function (newPublisher) {
        this._publisher = newPublisher;
    };
    return ReferenceItem;
}());
var ref = new ReferenceItem("hello w", 2004);
ref.printItem();
ref.setPublisher("Ann");
console.log(ref.getPublisher());
console.log();
///2_6
console.log("2_6");
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log("Edition: edition (".concat(this.year, ")"));
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia("hello w", 2004);
refBook.printItem();
///2_7
console.log();
console.log("2_7");
var ReferenceItem2 = /** @class */ (function () {
    function ReferenceItem2(newTitle, newYear) {
        this._publisher = "vova";
        this.department = "t2";
        this.title = newTitle;
        this.year = newYear;
        console.log("Creating a new ReferenceItem");
    }
    ReferenceItem2.prototype.printItem = function () {
        console.log("title ".concat(this.year, " was published in year ").concat(this.year, " ").concat(this.department));
    };
    ReferenceItem2.prototype.getPublisher = function () {
        var a = this._publisher;
        return a.toUpperCase();
    };
    ReferenceItem2.prototype.setPublisher = function (newPublisher) {
        this._publisher = newPublisher;
    };
    return ReferenceItem2;
}());
var Encyclopedia2 = /** @class */ (function (_super) {
    __extends(Encyclopedia2, _super);
    function Encyclopedia2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Encyclopedia2.prototype.printItem = function () {
        console.log("Edition: edition (".concat(this.year, ")"));
    };
    Encyclopedia2.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia2;
}(ReferenceItem2));
var refBook2 = new Encyclopedia2("hello w", 2004);
refBook2.printCitation();
