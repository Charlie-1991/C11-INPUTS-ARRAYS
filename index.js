function getOp(elementName) {
  const op1 = document.getElementById(elementName);
  return Number(op1.value);
}
function add() {
  console.log("Trying my add");

  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");

  const a = Number(op1.value);
  const b = Number(op2.value);

  const c = a + b;

  const answer = document.getElementById("answer");
  answer.value = c;
}

function substract() {
  console.log("Trying my add");

  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");

  const a = Number(op1.value);
  const b = Number(op2.value);

  const c = a - b;

  const answer = document.getElementById("answer");
  answer.value = c;
}
