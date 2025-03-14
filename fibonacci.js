function fibo(n) {
    let num1 = 0, num2 = 1, nxtNum;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nxtNum = num1 + num2;
        num1 = num2;
        num2 = nxtNum;
    }
}

fibo(5);

