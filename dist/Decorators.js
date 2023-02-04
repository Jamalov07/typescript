"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// base scructure
const baseStruct = () => { };
// ================classs decorator =======
const logClass = (constructor) => {
    console.log(constructor); // Natija class user{}
};
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
};
User = __decorate([
    logClass // <----------- decoratorni chaqirish;
    ,
    __metadata("design:paramtypes", [String, Number])
], User);
// ===== property decorator ======
const logProperty = (target, propertyKey) => {
    console.log(target, "aaa", propertyKey); // natija secret
};
let User1 = class User1 {
    constructor(name, age, secret) {
        this.name = name;
        this.age = age;
        this.secret = secret;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
};
__decorate([
    logProperty,
    __metadata("design:type", Number)
], User1.prototype, "secret", void 0);
User1 = __decorate([
    logClass,
    __metadata("design:paramtypes", [String, Number, Number])
], User1);
// ===== method decorator ======
const logMethod = (target, propertyKey, descriptor) => {
    console.log(propertyKey); //natija getpassss;
};
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], User2.prototype, "getPass", null);
//===============get / set / decorator = = = == = =  == = = =
const logSet = (target, propertyKey, descriptor) => {
    console.log(propertyKey); //natija getpassss;
};
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set myAge(age) {
        this.age = age;
    }
}
__decorate([
    logSet,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], User3.prototype, "myAge", null);
// ============= factory decorator ===============
function factory(value) {
    // factory
    return function (target) {
        // decorator
        console.log(target); // decorator logic
    };
}
// ===== === === = amalda factory = = ==  = == = = = = =
const enumerable = (value) => {
    return (target, propertyKey, descriptor) => {
        descriptor.enumerable = value;
    };
};
class User4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], User4.prototype, "getPass", null);
// ================ amalda factory decorator ==================
const first = () => {
    console.log("first() completing");
    return (target, propertyKey, descriptor) => {
        console.log("first called");
    };
};
const second = () => {
    console.log("second() completing");
    return (target, propertyKey, descriptor) => {
        console.log("second called");
    };
};
class User5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], User5.prototype, "getPass", null);
