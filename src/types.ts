// Boolean
const isBool = true;
const isActive: boolean = true;
const isMale: boolean = false;
let isNumber = true;
let isNumber1: boolean = true;

// NUmber
const num: number = 5;
// const PI: number = 3.14;
let bir = 1;

// String
const lang: String = "typescript";
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
let myVar: any = 5;
myVar = "sds";
myVar = true;

let myVar2 = myVar as number;
let myVar3 = <number>myVar;

console.log(myVar2);
console.log(myVar3);

// Array
const numArray: number[] = [1, 2, 3, 4, 5];
const numArray1: Array<number> = [1, 2, 3, 4, 5];
const numArray2 = [1, 2, 3, 5];
let numArray3 = [1, 2, 3, 4, 5, 6];

const strArray: string[] = ["salom", "hayr"];
const strArray1: Array<string> = ["salom", "hayr"];

//Tuple
const address: [string, number, boolean, null] = ["Toshkent", 27, true, null];
console.log(address);

//Alias
type Son = number;
const son1: Son = 2; //faqat number oladi;

type Login = string;
const loginUser: Login = "superUser";
console.log(typeof loginUser);

//Union type

type StrNum = string | number | boolean;
const strnumArray: StrNum[] = [1, 2, "2", "3", true];

let sdArray = [1, 2, 4, 5, 6, "7", false, null, undefined];

type MyType = null | undefined;
let userId: StrNum = 5;

function prindID(id: StrNum) {
  if (typeof id === "number") {
    console.log(id * 2);
  } else if (typeof id == "boolean") {
    console.log(id == false);
  } else {
    console.log(id.length);
  }
}

function getUser(user: string | string[]): void | string | string[] {
  if (Array.isArray(user)) {
    console.log(user.join("|_|"));
    return user;
  } else {
    console.log(user);
    return user;
  }
}
getUser(["admin", "user"]);

function salomlash(name: string): void {
  console.log("salom", name);
}
salomlash("men");

function sum(a: number, b: number): number {
  return a + b;
}
sum(1, 2);

// never
function myError(message: string): never {
  throw new Error(message);
}

function cheksiz(): never {
  while (true) {
    console.log("salom");
  }
}

//literal
let a1: "bir" = "bir";
a1 = "bir";

type AdminAction = "CREATE" | "ACTIVATE" | "DEACTIVATE";

class ActionEngine {
  doAction(action: AdminAction) {
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

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

function move(direct: Direction) {
  return direct;
}

move("RIGHT");
// move("RIGT"); error

//onject types
type LatLon = { lat: number; lon: number };

let lat = 5;
let lon = 6;

const myCoordinate: LatLon = { lat: 3, lon: 6 };

console.log("Coor", myCoordinate);

//interface;
interface ICoord {
  lat: number;
  long: number;
}
function check(coord: ICoord) {}

// check({ lat: 3, lon: 4 })

interface IMushuksimon {
  name: string;
  age?: number;
}

interface IMushuk extends IMushuksimon {
  color: string;
  tail: boolean | undefined;
}

interface IMushuk {
  isHomeAnimal: boolean;
}

const myMushuk: IMushuk = {
  name: "malla",
  color: "sariq",
  tail: true,
  isHomeAnimal: false,
};
console.log(myMushuk);

type Animal = {
  name: string;
  age?: number;
};

type Cat = Animal & {
  color: string;
  tail?: boolean;
};

const myCat: Cat = {
  name: "qoravoy",
  color: "qizil",
};

interface IRect22 {
  readonly lineWidth: number;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: IRect22 = {
  lineWidth: 1,
  size: {
    width: 3,
    height: 4,
  },
};

rect1.color = "blue";
// rect1.lineWidth = 33; error ; because property is read only type;
rect1.size.height = 100;

interface IRectArea extends IRect22 {
  getArea: () => number;
}

const rect2: IRectArea = {
  lineWidth: 4,
  size: {
    width: 33,
    height: 12,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

console.log(rect2.getArea());

interface IStyle {
  [key: string]: string;
}

const css: IStyle = {
  border: "3px sold red",
  borderRadius: "5px",
};

interface IConnection {
  host: string;
  port: number;
}

function connect(connection: IConnection | "default") {
  if (connection == "default") {
  } else {
  }
}

connect({ host: "localhost", port: 3000 });
connect("default");

//ENUM

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

Direction1.Up;
Direction1.Right;

enum Users {
  user,
  admin,
  superuser,
}

console.log(Users.admin);
console.log(Users[1]);

interface IPosition {
  x?: number;
  y?: number;
}

function position(): IPosition;
function position(a: number): IPosition;
function position(a?: number, b?: number): IPosition;

function position(
  a?: number,
  b?: number
): { x: number | undefined; y: number | undefined } {
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

function myLog(mes: string | number): string | number {
  console.log(mes);
  return mes;
}

myLog(3);
myLog("salom");
// myLog(true);

function myLog1<T>(mes: T): T {
  console.log(mes);
  return mes;
}

myLog1<string>("satr");
myLog1("salom");
myLog1<number>(23);
myLog1<boolean>(true);

//----------

function myLog2<T, K>(mes: T, arr: K[]): K[] {
  console.log(mes);
  return arr;
}

console.log(myLog2<string, number>("saLom", [1, 2, 4]));

// amaldaaaa ======

interface ILength {
  length: number;
}

function myLog3<T extends ILength, K>(val: T, arr: K[]): K[] {
  console.log(val.length);
  return arr;
}

myLog3("Salomlar", [1]);
// myLog3(true, [1]); error true does not exists property " length"
myLog3([1, 2], [1]);
// myLog3(2, false); 1() length not found in value "2"  and  false not array

const Numbers: Array<number> = [1, 2, 3, 4, 5];
const Strings: Array<string> = ["1", "2", "3", "4", "5"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(Numbers));
reverse(Strings);

// amaldaaaa

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Assalomu alaykum");
  }, 2000);
});
promise.then((data) => {
  console.log(data.slice(2, 7));
});

interface IObject {
  [key: string]: string;
}

// function mergeObj<T extends IObject, K extends IObject>(obj1: T, obj2: K) {
//   return Object.assign({}, obj1, obj2);
// }

// function mergeObj<T extends object, K extends object>(obj1: T, obj2: K) {
//   return Object.assign({}, obj1, obj2);
// }

// function mergeObj(obj1: object, obj2: object) {
//   return Object.assign({}, obj1, obj2);
// }

function mergeObj<T extends object, K extends object>(obj1: T, obj2: K) {
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
let s2: typeof s1 = "hello";

//key of

type Coord = {
  lat: number;
  lon: number;
};

type P = keyof Coord;

let a: P = "lat";
let b: P = "lon";

// interface ICoord1

interface ICoord1 {
  lat: number;
  lon: number;
}

type Coord1 = keyof ICoord1;
let key: Coord1;
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

function getObjValue<O extends object, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

//====

function log(a: string | null) {
  // if (a !== null) {
  //   return a.toLowerCase();
  // }
  // return a;
  return a!.toLowerCase();
}
console.log(log("SALOM"));

//================

const big: bigint = BigInt("1000");
console.log(big);

const sym1: symbol = Symbol("ID");
const sym2: symbol = Symbol("ID");
console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);

////============ CLASS ==================//

class Bags {
  readonly name: string;
  color: string;
  material: string;
  price: number;
  constructor(name: string, color: string, material: string, price: number) {
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
  color: string;
  material: string;
  constructor(
    readonly name: string,
    color: string,
    material: string,
    readonly price: number
  ) {
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
  public name: string;
  protected tili: string;
  private _dini: string;

  constructor(name: string) {
    this.name = name;
  }

  set dini(religious: string) {
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
  public history: string;
  constructor(name: string, history: string) {
    super(name);
    this.history = history;
  }

  public setLang(lang: string) {
    this.tili = lang;
    // this._dini
  }
  override info() {
    return `${super.info()}, dini: ${this.dini}, tarixi: ${this.history}`;
  }
}

const uzbek1 = new Uzbek("Uzbek", "Buyuk");
// uzbek1.history
uzbek1.setLang("Uzbek tili");
uzbek1.dini = "Islom dini";

console.log(uzbek1.info());

//================= ABSTRACT =================

abstract class ShaxmatDona {
  abstract draw(): void;
  abstract move(): string;
  info(s: string) {
    console.log(s);
  }
}

// const dona = new ShaxmatDona() . // xato

class Fil extends ShaxmatDona {
  draw(): void {
    console.log("Chiz");
  }
  move(): string {
    return "Diognal yur";
  }
  
}

const fil = new Fil();
fil.info("filcha");

//================== implments =================
interface LoggerService {
  log: (mes: string) => void;
}

class Logger implements LoggerService {
  log(mes: string) {
    console.log(mes);
  }
}
// //================== static =================

class StaticClass {
  static num = 1;
}
console.log(StaticClass.num); //instance yaratmasdan murojaat qilish mumkin

//================== class generic =================
class MyClass<T> {
  message: T;
}

const xabar = new MyClass<number>();
xabar.message;