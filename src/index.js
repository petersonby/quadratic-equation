module.exports = function solveEquation(equation) {
  const numbers = equation.match(/\-?[\-?\+?]? ?\d+/g);
  const a = parseInt(numbers[0], 10);
  const b = parseInt(numbers[2].replace(' ', ''), 10);
  const c = parseInt(numbers[3].replace(' ', ''), 10);
  const d = Math.pow(b, 2) - 4 * a * c;
  const x = [];
  
  if (d >= 0) {
  	let x1 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  	let x2 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  	x.push(x1);
  	x.push(x2);
  }

  x.sort((a,b) => a-b);
  return x;
}
