// base scructure
const baseStruct = () => {};

// ================classs decorator =======

const logClass = (constructor: Function) => {
  console.log(constructor); // Natija class user{}
};
@logClass // <----------- decoratorni chaqirish;
class User {
  constructor(public name: string, public age: number) {}
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// ===== property decorator ======

const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(target, "aaa", propertyKey); // natija secret
};
@logClass
class User1 {
  @logProperty
  secret: number;
  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// ===== method decorator ======

const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey); //natija getpassss;
};

class User2 {
  constructor(public name: string, public age: number) {}
  @logMethod
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

//===============get / set / decorator = = = == = =  == = = =

const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey); //natija getpassss;
};

class User3 {
  constructor(public name: string, public age: number) {}
  @logSet
  set myAge(age: number) {
    this.age = age;
  }
}

// ============= factory decorator ===============

function factory(value: any) {
  // factory
  return function (target: any) {
    // decorator
    console.log(target); // decorator logic
  };
}

// ===== === === = amalda factory = = ==  = == = = = = =

const enumerable = (value: boolean) => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value;
  };
};

class User4 {
  constructor(public name: string, public age: number) {}
  @enumerable(false)
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// ================ amalda factory decorator ==================

const first = () => {
  console.log("first() completing");
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    console.log("first called");
  };
};

const second = () => {
  console.log("second() completing");
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    console.log("second called");
  };
};

class User5 {
  constructor(public name: string, public age: number) {}
  @first()
  @second()
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}
