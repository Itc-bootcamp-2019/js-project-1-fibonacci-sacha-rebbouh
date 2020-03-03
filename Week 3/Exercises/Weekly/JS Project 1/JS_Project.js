function fib(n) {
	firstNum = 1;
	secondNum = 0;
	sumNum = firstNum + secondNum;
	for (i = 0; i < n; i += 1) {
		sumNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = sumNum;
	}
	return sumNum;
}

let n;
sumNum = fib(n);

// document.getElementById("firstNumber").innerText = n;
// document.getElementById("secondNumber").innerText = sumNum;

executeFib.addEventListener("click", () => {
	let a = firstNumber.value;
	let b = fib(a);
	document.getElementById("secondNumber").innerText = b;
});

// function fibRec(n) {
// 	if (n <= 1) return n;
// 	return fib(n - 2) + fib(n - 1);
// }
