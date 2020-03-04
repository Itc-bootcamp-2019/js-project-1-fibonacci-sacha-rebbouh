// document.getElementById("firstNumber").innerText = "X";
// document.getElementById("secondNumber").innerText = "Y";

function fib(n) {
	let firstNum = 1;
	let secondNum = 0;
	let sumNum;
	for (let i = 0; i <= n; i += 1) {
		let sumNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = sumNum;
	}
	return sumNum;
}

// let n;
// let n;
// let m = fib(n);

executeFib.addEventListener("click", () => {
	let a = firstNumber.value;
	// let b = fib(a);
	// document.getElementById("secondNumber").innerText = b;

	let url = "http://localhost:5050/fibonacci/" + a;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			document.getElementById("secondNumber").innerText = data.result;
		});
});
