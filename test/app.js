const A = require("../dist/index");

let b = A.TOTP.generate();
console.log(b);

let c = new A.TOTP();

console.log(c.validate());
