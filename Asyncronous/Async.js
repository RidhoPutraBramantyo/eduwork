console.log("1. Eduwork");
setTimeout(() => {
  console.log("2. Javascript");
});
console.log("3. MERN");

function main(param1, param2, cb) {
  console.log(param1 + "\n" + param2);
  cb();
}

function myCallback() {
  console.log("hello callback");
}

main("testing1", "testing2", myCallback);

// function injection
function calculate(p1, p2, callback) {
  let result = p1 + p2;
  if (typeof callback === "function") {
    result = callback(p1, p2);
  }
  return result;
}

let a = calculate(7000, 2000, function (x, y) {
  console.log(x * y);
});
