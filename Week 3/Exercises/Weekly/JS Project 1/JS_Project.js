function isValidJSON(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}
// document.getElementById("firstNumber").innerText = "X";
// document.getElementById("secondNumber").innerText = "Y";

// function fib(n) {
// 	let firstNum = 1;
// 	let secondNum = 0;
// 	let sumNum;
// 	for (let i = 0; i <= n; i += 1) {
// 		let sumNum = firstNum + secondNum;
// 		firstNum = secondNum;
// 		secondNum = sumNum;
// 	}
// 	return sumNum;
// }

// let n;
// let n;
// let m = fib(n);
let executeFib = document.getElementById("executeFib");

executeFib.addEventListener("click", () => {
	let a = firstNumber.value;
	let secondNumber = document.getElementById("secondNumber");
	let fiboLoader = document.getElementById("fiboLoader");

	if (a >= 50) {
		secondNumber.innerText = "Error, this number is too large.";
	} else {
		fiboLoader.style.display = "block";
		// let b = fib(a);
		// secondNumber.innerText = b;
		let url = "http://localhost:5050/fibonacci/" + a; //template string
		fetch(url)
			.then(res => res.text())
			.then(data => {
				fiboLoader.style.display = "none";
				if (isValidJSON(data)) {
					let isJSON = JSON.parse(data);
					secondNumber.style.color = "black";
					secondNumber.innerText = isJSON.result;
				} else {
					let servError = "Server Error: ";
					let globalMessage = servError + data;
					secondNumber.style.color = "red";
					secondNumber.innerText = globalMessage;
				}
				secondNumber.style.display = "block";
			});
	}
});
