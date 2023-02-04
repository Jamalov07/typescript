export var Utils;
(function (Utils) {
    Utils.SECRET1 = "123321";
    Utils.getPass1 = (name, age) => `${name}${age}`;
})(Utils || (Utils = {}));
