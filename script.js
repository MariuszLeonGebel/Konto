const amount = document.querySelector(".form-control");
const balance = document.querySelector(".balance");
const btnIn = document.querySelector(".btn-success");
const btnOut = document.querySelector(".btn-danger");

const testIn = () => {
  console.log("Test button IN")
}

btnIn.addEventListener("click", testIn)

const testOut = () => {
  console.log("Test button OUT")
}

btnOut.addEventListener("click", testOut)