function calc(a, b, c) {



    if (c == "+") {

        var ans = Number(a) + Number(b);
        return ans
    } else if (c == "*") {

        var ans = Number(a) * Number(b);
        return ans
    } else if (c == "-") {

        var ans = Number(a) - Number(b);
        return ans
    } else if (c == "/") {

        var ans = Number(a) / Number(b);
        return ans
    }



}

var answer = calc(prompt("entr the number"), prompt("entr the second number"), prompt("Enter the operand:+,-,*,/"));
alert("Your answer is " + answer);