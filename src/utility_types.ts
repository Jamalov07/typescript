// ================== readonly

interface IUser {
  name: string;
  pass: string;
}

const user: Readonly<IUser> = {
  name: "Admin",
  pass: "qwerty",
};

// user.name = "Superuser"; error
// user.pass = "123445"; error

// =============  required ===============

interface IRect {
  width?: number;
  height?: number;
}

const user1: IRect = { width: 10 };
// const user2: Required<IRect> = { width: 2 }; error because its required

// ============ partial ============

interface IRect1 {
  width: number;
  height: number;
}

// const user3: IRect1 = { width: 10 }; // error because its required
const user4: Partial<IRect1> = { width: 2 }; // ok

// ================== record =====================

type WwwConfig = Record<"port" | "domain", string | number>; // barchasi kerak;
// type WwwConfig =  Partial<"port" | "domain", string>; majbur emas barchasini kiritish

let wwwConfig: WwwConfig = {
  port: 80,
  domain: "www.example.com",
  // user: "User" // errror
};

//// =========== example ==========

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "product";

const Pages: Record<Page, PageInfo> = {
  about: { title: "about" },
  home: { title: "home" },
  product: { title: "product" },
};

// ============ exclude pick extract ===========

// type User = {
//   _id: number;
//   name: string;
//   email: string;
//   password?: string; // majburiy emas esdan chiqmasin
//   createdAt: Date;
// };

// type UserNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
// type UserNoMeta2 = Extract<keyof User, "name" | "email" | "isActive">;
// type UserNoMeta3 = Pick<User, "name" | "email" | "password">;
// type UserNoMeta4 = Omit<User, "_id" | "createdAt">;

// const data1: UserNoMeta1 = "name" || "email";
// const data2: UserNoMeta2 = "email" || "name";
// const data3: UserNoMeta3 = {name: "ism",email: "email",password: "password", };
// const data4: UserNoMeta4 = { name: "name", email: "email", password: "password",};

// ===================== nonNullable ===============

type Type1 = NonNullable<string | null | number | undefined>;

//======================= returntype ==========

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type T1 = ReturnType<() => string>;
type T2 = ReturnType<(s: string) => void>;
type T3 = ReturnType<() => string | number>;
type T4 = ReturnType<<T>() => T>;
type T5 = ReturnType<<T extends U, U extends string[]>() => T>;
type T6 = ReturnType<any>;
type T7 = ReturnType<never>;
// type T8 = ReturnType<string>; error
// type T9 = ReturnType<Function>;  error

/// ================= instance type ==================

// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any

class U {
  x = 0;
  y = 0;
}

const obj1 = new U();
type U1 = InstanceType<typeof U>;
// type U5 = InstanceType<obj1>; xatooo
type U2 = InstanceType<any>;
type U3 = InstanceType<never>;
// type U4 = InstanceType<number> // xatoo;

// ========= parameters <T> ==============================

function f<T>(p0: T, p1: number, p2: string, p3?: boolean, p4: object = {}) {}

type FunctionParams = Parameters<typeof f>;

/// ================== Constructorparameters =====================

class MyClasss<T> {
  constructor(p0: T, p1: number, p2: string, p3?: boolean, p4: object = {}) {}
}

type ClassParams = ConstructorParameters<typeof MyClass>;

// = = = = = = = = =awaited <T>=================

// A = string;
type A = Awaited<Promise<string>>;
type A1 = Awaited<string>;

// B = string;
type B = Awaited<Promise<Promise<string>>>;

// c = string | number;
type C = Awaited<string | Promise<number>>;


