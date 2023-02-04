"use strict";
// ================== readonly
const user = {
    name: "Admin",
    pass: "qwerty",
};
const user1 = { width: 10 };
// const user3: IRect1 = { width: 10 }; // error because its required
const user4 = { width: 2 }; // ok
// type WwwConfig =  Partial<"port" | "domain", string>; majbur emas barchasini kiritish
let wwwConfig = {
    port: 80,
    domain: "www.example.com",
    // user: "User" // errror
};
const Pages = {
    about: { title: "about" },
    home: { title: "home" },
    product: { title: "product" },
};
// type T8 = ReturnType<string>; error
// type T9 = ReturnType<Function>;  error
/// ================= instance type ==================
// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
class U {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const obj1 = new U();
// type U4 = InstanceType<number> // xatoo;
// ========= parameters <T> ==============================
function f(p0, p1, p2, p3, p4 = {}) { }
/// ================== Constructorparameters =====================
class MyClasss {
    constructor(p0, p1, p2, p3, p4 = {}) { }
}
