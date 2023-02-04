"use strict";
const SECRET = "123321";
const PI = 3.14;
// const getPass = (name: string, age: number): string => `${name}${age}`;
// const isEmpty = <T>(data: T): boolean => !data;
// (function () {
//   const SECRET: string = "123321";
//   const PI: number = 3.14;
//   const getPass = (name: string, age: number): string => `${name}${age}`;
//   const isEmpty = <T>(data: T): boolean => !data;
// })();
// ==define namespace
var Utils;
(function (Utils) {
    const SECRET = "123321";
    Utils.PI = 3.14;
    const getPass = (name, age) => `${name}${age}`;
    const isEmpty = (data) => !data;
})(Utils || (Utils = {}));
// const myPass = Utils.getPass("salim",12); // error;
(function (Utils) {
    Utils.SECRET = "123321";
    const PI = 3.14;
    Utils.getPass = (name, age) => `${name}${age}`;
    Utils.isEmpty = (data) => !data;
})(Utils || (Utils = {}));
const myPass = Utils.getPass("Salim", 22); // false
const isSecret = Utils.isEmpty(Utils.SECRET); //false
