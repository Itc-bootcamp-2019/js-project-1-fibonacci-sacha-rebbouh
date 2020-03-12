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

function executeAll() {
	let executeFib = document.getElementById("executeFib");

	executeFib.addEventListener("click", () => {
		let a = firstNumber.value;
		let secondNumber = document.getElementById("secondNumber");
		let fiboLoader = document.getElementById("fiboLoader");
		let redBox = document.getElementById("redBox");

		if (a > 50) {
			firstNumber.classList.add("over-fifty");
			redBox.classList.add("light-pink");
			redBox.innerText = "Can't be larger than 50";
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
						secondNumber.innerText = isJSON.result;
					} else {
						let servError = "Server Error: ";
						let globalMessage = servError + data;
						secondNumber.innerText = globalMessage;
					}
					secondNumber.style.display = "block";
				});
		}
	});
}

function resultList() {
	let a = firstNumber.value;
	if (a !== 42 && a < 50) {
		let url = "http://localhost:5050/getFibonacciResults";
		let results = document.getElementById("resultList");
		fetch(url)
			.then(res => res.json())
			.then(data => {
				for (let i = 0; i <= data.results.length - 1; i++) {
					let b = data.results[i];
					let searchDate = data.results[i].createdDate;
					let fullDate = new Date(searchDate);
					console.log(data.results.length);

					results.innerHTML +=
						"The Fibonnaci of " +
						"<span class='bold'>" +
						b.number +
						"</span>" +
						" is " +
						"<span class='bold'>" +
						b.result +
						"</span>" +
						". Calculated at: " +
						fullDate +
						"<hr/>";
				}
			});
	}
}

executeAll();
resultList();
