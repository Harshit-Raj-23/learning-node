console.log("Sum module executed");

var x = "Namaste Node";

const calculateSum = (a,b) => {
    const sum = a + b;
    console.log(sum);    
}

module.exports = { x, calculateSum }