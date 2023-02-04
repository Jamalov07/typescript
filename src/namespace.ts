const SECRET: string = "123321";
const PI: number = 3.14;

// const getPass = (name: string, age: number): string => `${name}${age}`;

// const isEmpty = <T>(data: T): boolean => !data;

// (function () {
//   const SECRET: string = "123321";
//   const PI: number = 3.14;

//   const getPass = (name: string, age: number): string => `${name}${age}`;

//   const isEmpty = <T>(data: T): boolean => !data;
// })();

// ==define namespace

namespace Utils {
  const SECRET: string = "123321";
  export const PI: number = 3.14;

  const getPass = (name: string, age: number): string => `${name}${age}`;

  const isEmpty = <T>(data: T): boolean => !data;
}

// const myPass = Utils.getPass("salim",12); // error;

namespace Utils {
  export const SECRET: string = "123321";
  const PI: number = 3.14;

  export const getPass = (name: string, age: number): string => `${name}${age}`;

  export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass("Salim", 22); // false
const isSecret = Utils.isEmpty(Utils.SECRET); //false
