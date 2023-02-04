"use strict";
// Boolean
const isBool = true;
const isActive = true;
const isMale = false;
let isNumber = true;
let isNumber1 = true;
// NUmber
const num = 5;
// const PI: number = 3.14;
let bir = 1;
// String
const lang = "typescript";
let str = "Salom";
//Concat
let num2 = "7";
let c = num + num2;
let summa = num + Number(num2);
console.log(typeof c);
console.log(typeof summa);
console.log(c);
console.log(summa);
// Any
let myVar = 5;
myVar = "sds";
myVar = true;
let myVar2 = myVar;
let myVar3 = myVar;
console.log(myVar2);
console.log(myVar3);
// Array
const numArray = [1, 2, 3, 4, 5];
const numArray1 = [1, 2, 3, 4, 5];
const numArray2 = [1, 2, 3, 5];
let numArray3 = [1, 2, 3, 4, 5, 6];
const strArray = ["salom", "hayr"];
const strArray1 = ["salom", "hayr"];
//Tuple
const address = ["Toshkent", 27, true, null];
console.log(address);
const son1 = 2; //faqat number oladi;
const loginUser = "superUser";
console.log(typeof loginUser);
const strnumArray = [1, 2, "2", "3", true];
let sdArray = [1, 2, 4, 5, 6, "7", false, null, undefined];
let userId = 5;
function prindID(id) {
    if (typeof id === "number") {
        console.log(id * 2);
    }
    else if (typeof id == "boolean") {
        console.log(id == false);
    }
    else {
        console.log(id.length);
    }
}
function getUser(user) {
    if (Array.isArray(user)) {
        console.log(user.join("|_|"));
        return user;
    }
    else {
        console.log(user);
        return user;
    }
}
getUser(["admin", "user"]);
function salomlash(name) {
    console.log("salom", name);
}
salomlash("men");
function sum(a, b) {
    return a + b;
}
sum(1, 2);
// never
function myError(message) {
    throw new Error(message);
}
function cheksiz() {
    while (true) {
        console.log("salom");
    }
}
//literal
let a1 = "bir";
a1 = "bir";
class ActionEngine {
    doAction(action) {
        switch (action) {
            case "CREATE":
                return 1;
            case "DEACTIVATE":
                return 2;
            case "ACTIVATE":
                return 3;
            default:
                throw new Error("Buning imkoni yo'q");
        }
    }
}
function move(direct) {
    return direct;
}
move("RIGHT");
let lat = 5;
let lon = 6;
const myCoordinate = { lat: 3, lon: 6 };
console.log("Coor", myCoordinate);
function check(coord) { }
const myMushuk = {
    name: "malla",
    color: "sariq",
    tail: true,
    isHomeAnimal: false,
};
console.log(myMushuk);
const myCat = {
    name: "qoravoy",
    color: "qizil",
};
const rect1 = {
    lineWidth: 1,
    size: {
        width: 3,
        height: 4,
    },
};
rect1.color = "blue";
// rect1.lineWidth = 33; error ; because property is read only type;
rect1.size.height = 100;
const rect2 = {
    lineWidth: 4,
    size: {
        width: 33,
        height: 12,
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
console.log(rect2.getArea());
const css = {
    border: "3px sold red",
    borderRadius: "5px",
};
function connect(connection) {
    if (connection == "default") {
    }
    else {
    }
}
connect({ host: "localhost", port: 3000 });
connect("default");
//ENUM
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
Direction1.Up;
Direction1.Right;
var Users;
(function (Users) {
    Users[Users["user"] = 0] = "user";
    Users[Users["admin"] = 1] = "admin";
    Users[Users["superuser"] = 2] = "superuser";
})(Users || (Users = {}));
console.log(Users.admin);
console.log(Users[1]);
function position(a, b) {
    if (!a && !b) {
        console.log("salom");
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined };
    }
    return { x: a, y: b };
}
position();
function myLog(mes) {
    console.log(mes);
    return mes;
}
myLog(3);
myLog("salom");
// myLog(true);
function myLog1(mes) {
    console.log(mes);
    return mes;
}
myLog1("satr");
myLog1("salom");
myLog1(23);
myLog1(true);
//----------
function myLog2(mes, arr) {
    console.log(mes);
    return arr;
}
console.log(myLog2("saLom", [1, 2, 4]));
function myLog3(val, arr) {
    console.log(val.length);
    return arr;
}
myLog3("Salomlar", [1]);
// myLog3(true, [1]); error true does not exists property " length"
myLog3([1, 2], [1]);
// myLog3(2, false); 1() length not found in value "2"  and  false not array
const Numbers = [1, 2, 3, 4, 5];
const Strings = ["1", "2", "3", "4", "5"];
function reverse(array) {
    return array.reverse();
}
console.log(reverse(Numbers));
reverse(Strings);
// amaldaaaa
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Assalomu alaykum");
    }, 2000);
});
promise.then((data) => {
    console.log(data.slice(2, 7));
});
// function mergeObj<T extends IObject, K extends IObject>(obj1: T, obj2: K) {
//   return Object.assign({}, obj1, obj2);
// }
// function mergeObj<T extends object, K extends object>(obj1: T, obj2: K) {
//   return Object.assign({}, obj1, obj2);
// }
// function mergeObj(obj1: object, obj2: object) {
//   return Object.assign({}, obj1, obj2);
// }
function mergeObj(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const mergeObj1 = mergeObj({ user: "user" }, { admin: "admin" });
const mergeObj2 = mergeObj({ speed: 123 }, { area: 100 });
const mergeObj3 = mergeObj({ color: "red" }, { admin: "BMW" });
console.log(mergeObj1.admin);
console.log(mergeObj2.speed);
console.log(mergeObj3.color);
////======================type of
let s1 = "Salom";
let s2 = "hello";
let a = "lat";
let b = "lon";
let key;
key = "lon";
key = "lat";
/// generic key offf
// type User = {
//   _id: number;
//   name: string;
//   email: string;
//   password?: string; // majburiy emas esdan chiqmasin
//   createdAt: Date;
// };
// type UserNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
// type UserNoMeta2 = Pick<User, "name" | "email" | "password">;
// let user_1: UserNoMeta1 = "password";
// let user2: UserNoMeta2 = {
//   name: "Jamalov",
//   email: "Jamalov@gmail.com",
//   password: "Faqat men bilaman",
// };
const person = {
    name: "Salom",
    age: 22,
};
const car = {
    model: "Hundai",
    year: 2020,
};
console.log(getObjValue(person, "name"));
console.log(getObjValue(car, "model"));
function getObjValue(obj, key) {
    return obj[key];
}
//====
function log(a) {
    // if (a !== null) {
    //   return a.toLowerCase();
    // }
    // return a;
    return a.toLowerCase();
}
console.log(log("SALOM"));
//================
const big = BigInt("1000");
console.log(big);
const sym1 = Symbol("ID");
const sym2 = Symbol("ID");
console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);
////============ CLASS ==================//
class Bags {
    constructor(name, color, material, price) {
        this.name = name;
        this.color = color;
        this.material = material;
        this.price = price;
    }
    info() {
        return `${this.name} - ${this.price}`;
    }
}
const bag1 = new Bags("Dracon", "metallic", "dracon-teri", 7000);
bag1.price = 5000000;
console.log(bag1.info());
// class newStyle
class NewStylebags {
    constructor(name, color, material, price) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.material = material;
    }
    info() {
        return `${this.name} - ${this.color}`;
    }
}
const newbag1 = new NewStylebags("Dracon", "metallic", "dracon-teri", 7000);
console.log(newbag1.info());
console.log(newbag1.color);
//=====================
class Millat {
    constructor(name) {
        this.name = name;
    }
    set dini(religious) {
        this._dini = religious;
    }
    get dini() {
        return this._dini;
    }
    info() {
        return `Millati: ${this.name}, tili: ${this.tili}`;
    }
}
class Uzbek extends Millat {
    constructor(name, history) {
        super(name);
        this.history = history;
    }
    setLang(lang) {
        this.tili = lang;
        // this._dini
    }
    info() {
        return `${super.info()}, dini: ${this.dini}, tarixi: ${this.history}`;
    }
}
const uzbek1 = new Uzbek("Uzbek", "Buyuk");
// uzbek1.history
uzbek1.setLang("Uzbek tili");
uzbek1.dini = "Islom dini";
console.log(uzbek1.info());
//================= ABSTRACT =================
class ShaxmatDona {
    info(s) {
        console.log(s);
    }
}
// const dona = new ShaxmatDona() . // xato
class Fil extends ShaxmatDona {
    draw() {
        console.log("Chiz");
    }
    move() {
        return "Diognal yur";
    }
}
const fil = new Fil();
fil.info("filcha");
class Logger {
    log(mes) {
        console.log(mes);
    }
}
// //================== static =================
class StaticClass {
}
StaticClass.num = 1;
console.log(StaticClass.num); //instance yaratmasdan murojaat qilish mumkin
//================== class generic =================
class MyClass {
}
const xabar = new MyClass();
xabar.message;
