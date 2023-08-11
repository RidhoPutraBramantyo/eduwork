let test = "testing";
console.log(test);

function declaration() {
  console.log("declaration");
  return "declaration";
}

let dec = declaration();
console.log(dec);

console.log("=========================================================");

let expression = function () {
  console.log("expression");
  return "expression";
};

console.log(`1. ${expression()} + aaa`);
