function fib(n) {
	firstNum = 1;
	secondNum = 0;
	sumNum = firstNum + secondNum;
	for (i = 1; i < n; i += 1) {
		sumNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = sumNum;
	}
	return sumNum;
}

n = 10;
sumNum = fib(n);

document.getElementById("firstNumber").innerText = n;
document.getElementById("secondNumber").innerText = sumNum;

// function fibRec(n) {
// 	if (n <= 1) return n;
// 	return fib(n - 2) + fib(n - 1);
// }
